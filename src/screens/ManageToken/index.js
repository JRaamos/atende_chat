import ContainerAuthenticated from 'containers/Authenticated'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ManageTokenContainer, ManageTokenHeader } from './styled'
import { ButtonContainer, FormSpacer, HelpContainer, HelpText, Icon, Title } from 'ui/styled'
import Button from 'components/Form/Button'
import BasicTable from 'components/Form/Table'
import { CoreContext } from 'context/CoreContext'
import { DeleteToken, ReadToken } from 'services/token'

export default function ManageToken() {

  const { setModal, modal } = useContext(CoreContext)

  const [isHovered, setIsHovered] = useState(false);
  const [registers, setRegisters] = useState([])

  const remove = async (id) => {
    const result = await DeleteToken(id);
    if (result) {
      await init();
    }
  }


  const columns = [

    { title: 'Nome', ref: 'name' },
    { title: 'Tipo', ref: 'type' },

    {
      title: 'Ações',
      renderCell: ({ row }) => (
        <>
          <ButtonContainer center space noResponsive>
            <Icon icon='edit' nomargin pointer onClick={() => setModal({
              type: "add-manage-token",
              id: row.id,
            })} />
            <Icon icon='trash' nomargin pointer onClick={() => remove(row?.id)} />
          </ButtonContainer>
        </>
      )
    }
  ]


  const rows = useMemo(() => {
    return (registers || [])
  }, [registers])

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const init = async () => {
    const result = await ReadToken()
    if (result) {
      const formattedData = result.map(token => ({
        ...token,
        // created_at: new Date(token.created_at).toLocaleDateString()
      }))
      setRegisters(formattedData)
    }
  }

  useEffect(() => { init() }, [modal])

  return (
    <ContainerAuthenticated free>
      <ManageTokenContainer>
        <ManageTokenHeader>
          <Title small nomargin>Gerenciar Tokens
            <HelpContainer>
              {!isHovered ? null : <HelpText isHovered={isHovered}>Ajuda</HelpText>}
              <Icon icon="help" pointer isHovered={isHovered}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} />
            </HelpContainer>
          </Title>
          <Button color='primary' width={'fit-Content'} nospace onClick={() => setModal({ type: 'add-manage-token' })}>Criar Novo</Button>
        </ManageTokenHeader>
        <FormSpacer />
        <BasicTable columns={columns} rows={rows} border />
      </ManageTokenContainer>
    </ContainerAuthenticated >
  )
}
