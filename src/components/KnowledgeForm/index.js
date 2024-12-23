import React, { useContext, useState } from 'react'
import { ButtonContainer, Icon, Title } from 'ui/styled'
import { KnowledgeContainer, KnowledgeFormOptions, KnowledgeOption } from './styled'
import QuestionsAnswers from 'components/QuestionsAnswers';
import WebSites from 'components/WebSites';
import QuestionsFile from 'components/QuestionsFile';
import { CoreContext } from 'context/CoreContext';
import { CreateAgentIa } from 'services/agentsIa';
import Button from 'components/Form/Button';

export default function KnowledgeForm() {

  const [activeTab, setActiveTab] = useState(0);

  const { behaviorId, profileId } = useContext(CoreContext);

  const options = [
    { label: "Perguntas e Respostas", icon: <Icon icon="help" pointer /> },
    { label: "Websites", icon: <Icon icon="web" pointer /> },
    { label: "Documentos", icon: <Icon icon="document" pointer /> },
  ]

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  const save = async () => {
    const payload = {
      behaviorId,
      profileId
    }
    console.log(behaviorId, profileId);

    const result = await CreateAgentIa(payload);
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

        <ButtonContainer>
          <Button color='primary' width={'fit-Content'} nospace onClick={save}>Salvar</Button>
        </ButtonContainer>
      </KnowledgeContainer>
    </>
  )
}
