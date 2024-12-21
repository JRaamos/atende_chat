import ContainerAuthenticated from 'containers/Authenticated'
import React, { useContext, useMemo } from 'react'
import { ManageAgentsContainer, ManageAgentsHeader } from './styled'
import { ButtonContainer, FormSpacer, Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import BasicTable from 'components/Form/Table'
import { CoreContext } from 'context/CoreContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function ManageAgents() {

  const history = useHistory();
  const navigate = to => history.push(`/${to}`);


  const { setModal } = useContext(CoreContext)

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
  return (
    <ContainerAuthenticated free>
      <ManageAgentsContainer>
        <ManageAgentsHeader>
          <Title small nomargin>Gerenciar Agentes <Icon icon="help" pointer /></Title>
          <Button color='primary' width={'fit-Content'} nospace onClick={() => navigate('manage-agents/form/new')}>Criar Novo</Button>
        </ManageAgentsHeader>
        <FormSpacer />
        <BasicTable columns={columns} rows={rows} border />
      </ManageAgentsContainer>
    </ContainerAuthenticated >
  )
}
