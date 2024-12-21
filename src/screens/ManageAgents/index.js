import ContainerAuthenticated from 'containers/Authenticated'
import React, { useContext, useMemo, useState } from 'react'
import { ManageAgentsContainer, ManageAgentsHeader } from './styled'
import { ButtonContainer, FormSpacer, HelpContainer, HelpText, Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import BasicTable from 'components/Form/Table'
import { CoreContext } from 'context/CoreContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function ManageAgents() {

  const history = useHistory();
  const navigate = to => history.push(`/${to}`);


  const { setModal } = useContext(CoreContext)
  const [isHovered, setIsHovered] = useState(false);

  const columns = [

    { title: 'Nome', ref: 'name' },
    { title: 'Data da Criação', ref: 'createAt' },

    {
      title: 'Ações',
      renderCell: ({ row }) => (
        <>
          <ButtonContainer center space noResponsive>
            <Icon icon='edit' nomargin pointer onClick={() => navigate(`manage-agents/form/edit?id=${row?.id}`)} />
            <Icon icon='trash' nomargin pointer onClick={() => setModal({ type: "sample" })} />
          </ButtonContainer>
        </>
      )
    }
  ]


  const rows = useMemo(() => {
    return [
      { id: 1, name: 'Especialista em vendas', createAt: '14 nov 2024 ás 16:47' },
      { id: 2, name: 'Especialista em vendas', createAt: '14 nov 2024 ás 16:47' },
    ]
  }, [])
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('Mouse entrou!');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log('Mouse saiu!');
  };
  return (
    <ContainerAuthenticated free>
      <ManageAgentsContainer>
        <ManageAgentsHeader>
          <HelpText isHovered={isHovered}>Aqui você poderá criar, configurar e treinar seus próprios agentes de inteligência artificial. Para criar um agente de IA, você utilizará um atendente regular do seu plano, e também será necessário adquirir um plano de créditos específico para as mensagens que o seu agente de IA enviar.</HelpText>
          <Title small nomargin>Gerenciar Agentes<Icon icon="help" pointer isHovered={isHovered}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} />
          </Title>
          <Button color='primary' width={'fit-Content'} nospace onClick={() => navigate('manage-agents/form/new')}>Criar Novo</Button>
        </ManageAgentsHeader>
        <FormSpacer />
        <BasicTable columns={columns} rows={rows} border />
      </ManageAgentsContainer>
    </ContainerAuthenticated >
  )
}
