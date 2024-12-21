import React, { useState } from 'react'
import { AgentProfileContainer, Content, ObjectiveContent, ObjectivesContainer } from './styled'
import FormCore from 'components/Form/Core'
import { Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'


export default function AgentsProfile() {

  const [active, setActive] = useState('Vendas')
  const [activeCommunication, setActiveCommunication] = useState('Normal')


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
      options: [],
      required: true,
    },
    {
      ref: 'engines',
      placeholder: 'Engines',
      options: [{ id: 'OpenAi', title: 'OpenAi', name: 'OpenAi' }, { id: 'Dify', title: 'Dify', name: 'Dify' },],
      required: true,
    },
    {
      ref: 'model',
      placeholder: 'Modelo',
      options: [],
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
      ref: 'nameCompany',
      placeholder: 'Nome da empresa',
      type: 'text',
      required: true,
      height: 56,
      half: true,
    },
    {
      ref: 'sector',
      placeholder: 'Setor/Industria',
      options: [],
      required: true,
      half: true,
    },

  ]
  return (
    <>
      <AgentProfileContainer>
        <FormCore formItems={formItems} />
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
        <FormCore formItems={formItemsInfo} />
      </AgentProfileContainer>
    </>
  )
}
