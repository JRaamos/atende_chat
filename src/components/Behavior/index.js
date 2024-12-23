import Wrapper from 'components/Wrapper'
import React, { useContext, useEffect, useState } from 'react'
import { BehaviorContainer, ButtonContent, CheckContainer, Container, Content } from './styled'
import Input from 'components/Form/Input'
import { ButtonContainer, FormSpacer, Text, Title } from 'ui/styled'
import Check from 'components/Form/Check'
import Button from 'components/Form/Button'
import { InputLabel } from '@mui/material'
import { CreateBehavior, UpdateBehavior } from 'services/behaviors'
import { toast } from 'react-toastify'
import { CoreContext } from 'context/CoreContext'
import { ReadOneAgent } from 'services/agentsIa'

export default function Behavior({ next }) {

  const { setBehaviorId, behaviorId } = useContext(CoreContext)

  const searchParams = new URLSearchParams(window.location.search)
  const id = searchParams.get('id')

  const [form, setForm] = useState({})
  const formValue = ref => { return form?.[ref] ? form?.[ref] : ''; }
  const changeForm = (value, ref) => { setForm({ ...form, [ref]: value }); }

  const [checkOption, setCheckOption] = useState(false)
  const [responseTime, setResponseTime] = useState(false)
  const [audioResponse, setAudioResponse] = useState('never')

  const optionsCheck = [
    { label: 'Enviar para a aba "esperando"', value: 'waiting' },
    { label: 'Executar um chatbot', value: 'chatbot' },
  ]

  const optionsAudio = [
    { label: 'Nunca', value: 'never' },
    { label: 'Quando receber audio', value: 'whenReceive' },
    { label: 'Sempre', value: 'always' },
  ]


  const valid = () => {
    if (!formValue('maximumResponses') || !formValue('responseTime') || !formValue('voice')) {
      toast.error('Preencha todos os campos')
      return false
    }
    if (formValue('responseTime') > 90) {
      toast.error('O tempo máximo deve ser até 90 segundos')
      return false
    }

    if (formValue('maximumResponses') < 1) {
      toast.error('O número máximo de respostas deve ser maior que 0')
      return false
    }
    if (formValue('responseTime') < 1) {
      toast.error('O tempo máximo deve ser maior que 0')
      return false
    }

    return true

  }

  const init = async () => {
    if (id) {
      const result = await ReadOneAgent(id)
      if (result?.behavior) {
        setForm({
          maximumResponses: result.behavior.maximumResponses,
          responseTime: result.behavior.responseTime,
          voice: result.behavior.voice,
        })
        setCheckOption(result.behavior.afterLimit)
        setResponseTime(result.behavior.respondCallTransfer)
        setAudioResponse(result.behavior.responseAudio)
        setBehaviorId(result.behavior.id)
      }
    }
  }

  const save = async () => {
    if (!valid()) return

    const payload = {
      maximumResponses: formValue('maximumResponses'),
      afterLimit: checkOption,
      responseTime: formValue('responseTime'),
      respondCallTransfer: responseTime,
      voice: formValue('voice'),
      responseAudio: audioResponse,
    }

    const result = id ? await UpdateBehavior(behaviorId, payload) : await CreateBehavior(payload)
    if (result) {
      setBehaviorId(result.id)
      next()
    }
  }

  useEffect(() => { init() }, [])

  return (
    <>
      <BehaviorContainer>
        <Wrapper title="Número máximo de respostas">
          <Content>
            <Input
              label="Número máximo de respostas da IA"
              type="number"
              value={formValue('maximumResponses')}
              onChange={e => changeForm(e.target.value, 'maximumResponses')}
            />
          </Content>
          <Content>
            <Title small nomargin>Após atingir esse limite:</Title>
            <CheckContainer>
              {
                optionsCheck.map((option, index) => (
                  <Check
                    key={index}
                    label={option.label}
                    value={option.value}
                    checked={checkOption === option.value}
                    onChange={() => setCheckOption(option.value)}
                  />
                ))
              }
            </CheckContainer>
          </Content>
        </Wrapper>

        <Wrapper title="Tempo para resposta">
          <Content>
            <Input
              label="Aguardar para responder (máximo 90 segundos)"
              type="number"
              value={formValue('responseTime')}
              onChange={e => changeForm(e.target.value, 'responseTime')}
            />
            <Text small>
              Tempo mínimo que a IA deve aguardar para responder à pergunta.
              Neste intervalo, se o contato enviar várias mensagens, a IA responderá uma única vez contemplando todos os assuntos.
            </Text>
          </Content>
          <Content>
            <InputLabel small nomargin>Responder na transferência de atendimento?</InputLabel>
            <ButtonContainer space>
              <ButtonContent>
                <Button color={responseTime ? 'blue' : 'lightgrey'} nospace onClick={() => setResponseTime(!responseTime)}> Sim </Button>
              </ButtonContent>
              <ButtonContent>

                <Button color={responseTime ? 'lightgrey' : 'blue'} onClick={() => setResponseTime(!responseTime)} nospace>Não</Button>
              </ButtonContent>
            </ButtonContainer>
            <Text small>
              Se ativada, a IA enviará a primeira resposta já na transferência do chat.
              Caso contrário, aguardará a próxima mensagem do contato.
            </Text>
          </Content>
        </Wrapper>

        <Wrapper title="Resposta em áudio">
          <Content>
            <InputLabel small nomargin>Responder em forma de áudio</InputLabel>
            <ButtonContainer center space>
              {
                optionsAudio.map((option, index) => (
                  <ButtonContent>
                    <Button
                      key={index}
                      color={audioResponse === option.value ? 'blue' : 'lightgrey'}
                      nospace
                      onClick={() => setAudioResponse(option.value)}
                    >
                      {option.label}
                    </Button>
                  </ButtonContent>
                ))
              }
            </ButtonContainer>
            <Text small>
              Em que momento a IA responderá com um áudio para o contato, ao invés de texto.
            </Text>
          </Content>
          <Content>
            <Container>
              <Input
                label="Voz"
                value={formValue('voice')}
                onChange={e => changeForm(e.target.value, 'voice')}
              />
              <Text small>
                Qual voz a IA usará quando for responder em áudio.
              </Text>
            </Container>
          </Content>
        </Wrapper>
        <ButtonContainer>
          <ButtonContainer>
            <Button color='primary' width={'fit-Content'} nospace onClick={save}>Salvar e continuar</Button>
          </ButtonContainer>
        </ButtonContainer>
      </BehaviorContainer >
    </>
  )
}
