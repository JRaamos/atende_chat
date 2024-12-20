import ContainerAuthenticated from 'containers/Authenticated'
import React, { useContext, useMemo } from 'react'
import { ManageTokenContainer, ManageTokenHeader } from './styled'
import { ButtonContainer, FormSpacer, Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import BasicTable from 'components/Form/Table'
import { CoreContext } from 'context/CoreContext'

export default function ManageToken() {

  const { setModal } = useContext(CoreContext)

  const columns = [

    { title: 'Nome', ref: 'name' },
    { title: 'Tipo', ref: 'type' },

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
      { id: 1, name: 'Token Para acesso openAI', type: 'openIA', },
      { id: 2, name: 'Token Para acesso Dify', type: 'DifyIa' },
    ]
  }, [])

  return (
    <ContainerAuthenticated free>
      <ManageTokenContainer>
        <ManageTokenHeader>
          <Title small >Gerenciar Tokens
            <Icon icon="help" pointer />
          </Title>
          <Button color='primary' width={'fit-Content'} nospace>Criar Novo</Button>
        </ManageTokenHeader>
        <FormSpacer />
        <BasicTable columns={columns} rows={rows} border />
      </ManageTokenContainer>
    </ContainerAuthenticated >
  )
}
