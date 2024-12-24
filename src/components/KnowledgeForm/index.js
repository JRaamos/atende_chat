import React, { useContext, useState } from 'react'
import { ButtonContainer, Icon, Title } from 'ui/styled'
import { KnowledgeContainer, KnowledgeFormOptions, KnowledgeOption } from './styled'
import QuestionsAnswers from 'components/QuestionsAnswers';
import WebSites from 'components/WebSites';
import QuestionsFile from 'components/QuestionsFile';
import { CoreContext } from 'context/CoreContext';
import { CreateAgentIa, UpdateAgent } from 'services/agentsIa';
import Button from 'components/Form/Button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function KnowledgeForm() {

  const history = useHistory();
  const navigate = to => history.push(`/${to}`);

  const [activeTab, setActiveTab] = useState(0);

  const { behaviorId, profileId, knowledgeId } = useContext(CoreContext);

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  const options = [
    { label: "Perguntas e Respostas", icon: <Icon icon="help" pointer /> },
    { label: "Websites", icon: <Icon icon="web" pointer /> },
    // { label: "Documentos", icon: <Icon icon="document" pointer /> },
  ]

  const handleActiveTab = (index) => {
    setActiveTab(index);
  }

  const save = async () => {
    const payload = {
      behaviorId,
      profileId,
      knowledgeBaseId: knowledgeId
    }
    if (!id) {
      const result = await CreateAgentIa(payload);
    } else {
      const result = await UpdateAgent(id, payload);
    }
    navigate('manage-agents');

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
        {/* {activeTab === 2 ? <QuestionsFile /> : null} */}

        <ButtonContainer>
          <Button color='primary' width={'fit-Content'} nospace onClick={save}>Salvar e Finalizar</Button>
        </ButtonContainer>
      </KnowledgeContainer>
    </>
  )
}
