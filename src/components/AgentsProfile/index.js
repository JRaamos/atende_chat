import React, { useContext, useEffect, useRef, useState } from 'react'
import { AgentProfileContainer, Content, ObjectiveContent, ObjectivesContainer } from './styled'
import FormCore from 'components/Form/Core'
import { ButtonContainer, Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import { CreateProfile, ReadProfiles, UpdateProfile } from 'services/profile'
import { CoreContext } from 'context/CoreContext'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { ReadOneAgent } from 'services/agentsIa'


export default function AgentsProfile({ next }) {

  const [active, setActive] = useState('Vendas')
  const [activeCommunication, setActiveCommunication] = useState('Normal')
  const [register, setRegister] = useState({})
  const [registerInfo, setRegisterInfo] = useState({})

  const { setProfileId, profileId } = useContext(CoreContext)
  const searchParams = new URLSearchParams(window.location.search)
  const id = searchParams.get('id')



  const refForm = useRef()
  const refFormInfo = useRef()


  const formItems = [
    {
      ref: 'name',
      placeholder: 'Nome',
      type: 'text',
      required: true,
      height: 56,
      full: true,
    },
    {
      ref: 'channel',
      placeholder: 'Canal',
      options: [{ id: 'principal', title: 'Principal', name: 'Principal' },],
      required: true,
    },
    {
      ref: 'engine',
      placeholder: 'Engines',
      options: [{ id: 'OpenAi', title: 'OpenAi', name: 'OpenAi' }, { id: 'Dify', title: 'Dify', name: 'Dify' },],
      required: true,
    },
    {
      ref: 'model',
      placeholder: 'Modelo',
      options: [{ id: 'gpt-4o-mini', title: 'GPT-4 Mini', name: 'GPT-4 Mini' }, { id: 'gpt-4o', title: 'GPT-4', name: 'GPT-4' },],
      required: true,
    },
  ]

  const obj = [
    { title: 'Vendas', icon: 'money' },
    { title: 'Agendamento', icon: 'calendar' },
    { title: 'Suporte', icon: 'support' },
    { title: 'Qualificação', icon: 'qualification' },
  ]

  const comunication = [
    { title: 'Normal', icon: 'normal' },
    { title: 'Formal', icon: 'formal' },
    { title: 'Informal', icon: 'informal' },
  ]

  const formItemsInfo = [
    {
      ref: 'companyName',
      placeholder: 'Nome da empresa',
      type: 'text',
      required: true,
      height: 56,
      half: true,
    },
    {
      ref: 'sector',
      placeholder: 'Setor/Industria',
      options: [{ id: 'Tecnologia', title: 'Tecnologia', name: 'Tecnologia' }, { id: 'Financeiro', title: 'Financeiro', name: 'Financeiro' },],
      required: true,
      half: true,
    },

  ]

  const init = async () => {
    if (id) {
      const result = await ReadOneAgent(id)
      if (result?.profile) {
        setRegister({
          name: result?.profile?.name,
          channel: result?.profile?.channel,
          engine: result?.profile?.engine,
          model: result?.profile?.model,
        })
        setRegisterInfo(
          {
            companyName: result?.profile?.companyName,
            sector: result?.profile?.sector,
          }
        )
        setProfileId(result?.profile?.id)
        setActive(result?.profile?.agenteObjective)
        setActiveCommunication(result?.profile?.formCommunication)
      }
    }
  }

  const save = async () => {
    const detailForm = refForm?.current?.getForm();
    const detailFormInfo = refFormInfo?.current?.getForm();

    const payload = {
      ...detailForm,
      agenteObjective: active,
      formCommunication: activeCommunication,
      ...detailFormInfo
    };

    if (detailForm && detailFormInfo) {
      const result = id ? await UpdateProfile(profileId, payload) : await CreateProfile(payload)
      if (result) {
        setProfileId(result?.id)
        next()
      }

    }

  }

  useEffect(() => { init() }, [])

  return (
    <>
      <AgentProfileContainer>
        <FormCore formItems={formItems} ref={refForm} register={register} />
        <ObjectiveContent>
          <Content>
            <Title small nomargin>Objetivo principal do agente</Title>
            <ObjectivesContainer>
              {
                obj?.map((item, index) => (
                  <Button key={index} color={active === item?.title ? 'blue' : 'lightgrey'} small width={'fit-Content'} nospace onClick={() => setActive(item?.title)}> <Icon icon={item?.icon} pointer /> {item?.title}</Button>
                ))
              }
            </ObjectivesContainer>
          </Content>
          <Content>
            <Title small nomargin>Forma de comunicação</Title>
            <ObjectivesContainer>
              {
                comunication?.map((item, index) => (
                  <Button key={index} color={activeCommunication === item?.title ? 'blue' : 'lightgrey'} small width={'fit-Content'} nospace onClick={() => setActiveCommunication(item?.title)}> <Icon icon={item?.icon} pointer /> {item?.title}</Button>
                ))
              }
            </ObjectivesContainer>
          </Content>
        </ObjectiveContent>
        <FormCore formItems={formItemsInfo} ref={refFormInfo} register={registerInfo} />
        <ButtonContainer>
          <Button color='primary' width={'fit-Content'} nospace onClick={save}>Salvar e continuar</Button>
        </ButtonContainer>
      </AgentProfileContainer>
    </>
  )
}
