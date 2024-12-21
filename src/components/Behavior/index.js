import Wrapper from 'components/Wrapper'
import React, { useState } from 'react'
import { BehaviorContainer, CheckContainer, Container, Content } from './styled'
import Input from 'components/Form/Input'
import { ButtonContainer, FormSpacer, Text, Title } from 'ui/styled'
import Check from 'components/Form/Check'
import Button from 'components/Form/Button'
import { InputLabel } from '@mui/material'

export default function Behavior() {

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

  return (
    <>
      <BehaviorContainer>
        <Wrapper title="Número máximo de respostas">
          <Content>
            <Input
              label="Número máximo de respostas da IA"
              type="number"
              value={formValue('maxAnswers')}
              onChange={e => changeForm(e.target.value, 'maxAnswers')}
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
              value={formValue('maxAnswers')}
              onChange={e => changeForm(e.target.value, 'maxAnswers')}
            />
            <Text small>
              Tempo mínimo que a IA deve aguardar para responder à pergunta.
              Neste intervalo, se o contato enviar várias mensagens, a IA responderá uma única vez contemplando todos os assuntos.
            </Text>
          </Content>
          <Content>
            <InputLabel small nomargin>Responder na transferência de atendimento?</InputLabel>
            <ButtonContainer space>
              <Button
                color={responseTime ? 'blue' : 'lightgrey'}
                nospace
                onClick={() => setResponseTime(!responseTime)}
              >
                Sim
              </Button>
              <Button
                color={responseTime ? 'lightgrey' : 'blue'}
                onClick={() => setResponseTime(!responseTime)}
                nospace
              >
                Não
              </Button>
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
            <ButtonContainer space>
              {
                optionsAudio.map((option, index) => (
                  <Button
                    key={index}
                    color={audioResponse === option.value ? 'blue' : 'lightgrey'}
                    nospace
                    onClick={() => setAudioResponse(option.value)}
                  >
                    {option.label}
                  </Button>
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
      </BehaviorContainer>
    </>
  )
}
