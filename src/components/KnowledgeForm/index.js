import React, { useState } from 'react'
import { Icon, Title } from 'ui/styled'
import { KnowledgeContainer, KnowledgeFormOptions, KnowledgeOption } from './styled'
import QuestionsAnswers from 'components/QuestionsAnswers';
import WebSites from 'components/WebSites';
import QuestionsFile from 'components/QuestionsFile';

export default function KnowledgeForm() {

  const [activeTab, setActiveTab] = useState(0);

  const options = [
    { label: "Perguntas e Respostas", icon: <Icon icon="help" pointer /> },
    { label: "Websites", icon: <Icon icon="web" pointer /> },
    { label: "Documentos", icon: <Icon icon="document" pointer /> },
  ]

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  return (
    <>
      <KnowledgeContainer>
        <Title small>
          Aqui é onde você introduz dados fundamentais para o aprimoramento da IA, incluindo perguntas, respostas, websites e outros documentos com informações relevantes da empresa, e produtos que o Agente de IA deve ter conhecimento.
        </Title>
        <KnowledgeFormOptions>
          {options.map((option, index) => (<KnowledgeOption key={index} active={activeTab === index} onClick={() => handleActiveTab(index)}> {option.icon} {option.label}</KnowledgeOption>))}
        </KnowledgeFormOptions>

        {activeTab === 0 ? <QuestionsAnswers /> : null}
        {activeTab === 1 ? <WebSites /> : null}
        {activeTab === 2 ? <QuestionsFile /> : null}


      </KnowledgeContainer>
    </>
  )
}
