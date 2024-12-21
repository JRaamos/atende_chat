import ContainerAuthenticated from 'containers/Authenticated'
import React, { useState } from 'react'

import { Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import CustomTabs from 'components/Tabs'
import AgentsProfile from 'components/AgentsProfile'
import { ManageAgentsContainer, ManageAgentsHeader } from './styled'
import Behavior from 'components/Behavior'
import KnowledgeForm from 'components/KnowledgeForm'


export default function AgentsIaForm() {

  const history = useHistory();
  const navigate = to => history.push(`/${to}`);

  const [activeTab, setActiveTab] = useState(0);

  const { mode } = useParams()
  const tabsData = [
    { label: "Perfil", icon: <Icon icon="work" pointer /> },
    { label: "Comportamento", icon: <Icon icon="phone" pointer /> },
    { label: "Base de Conhecimento", icon: <Icon icon="white" pointer /> },
  ];


  return (
    <ContainerAuthenticated free>
      <ManageAgentsContainer>
        <ManageAgentsHeader>
          <Title small nomargin >{mode === 'new' ? 'Novo' : 'Editar'} Agente IA <Icon icon="help" pointer /> </Title>
          <Button color='primary' width={'fit-Content'} nospace onClick={() => navigate('manage-agents')}>Voltar</Button>
        </ManageAgentsHeader>
        <CustomTabs tabs={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} >
          {activeTab !== 0 ? null : <AgentsProfile />}
          {activeTab !== 1 ? null : <Behavior />}
          {activeTab !== 2 ? null : <KnowledgeForm />}
        </CustomTabs>
      </ManageAgentsContainer>
    </ContainerAuthenticated>
  )
}
