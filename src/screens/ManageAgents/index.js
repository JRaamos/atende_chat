import ContainerAuthenticated from 'containers/Authenticated'
import React, { useContext, useMemo } from 'react'
import { ManageAgentsContainer, ManageAgentsHeader } from './styled'
import { ButtonContainer, FormSpacer, Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import BasicTable from 'components/Form/Table'
import { CoreContext } from 'context/CoreContext'

export default function ManageAgents() {

  const { setModal } = useContext(CoreContext)

  const columns = [

    { title: 'Nome', ref: 'name' },
    { title: 'Data da Criação', ref: 'createAt' },

    {
      title: 'Ações',
      renderCell: ({ row }) => (
        <>
          <ButtonContainer center space noResponsive>
            <Icon icon='edit' nomargin pointer onClick={() => { }} />
            <Icon icon='trash' nomargin pointer onClick={() => setModal({ type: "delete" })} />
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
          <Title small >Gerenciar Agentes
            <Icon icon="help" pointer />
          </Title>
          <Button color='primary' width={'fit-Content'} nospace>Criar Novo</Button>
        </ManageAgentsHeader>
        <FormSpacer />
        <BasicTable columns={columns} rows={rows} border />
      </ManageAgentsContainer>
    </ContainerAuthenticated >
  )
}
