import { CoreContext } from 'context/CoreContext'
import React, { useContext } from 'react'
import { FormSpacer, FormText, Title } from 'ui/styled'
import { CompanyButtonContainer } from './styled'
import Wrapper from '../Wrapper';
import Button from 'components/Form/Button';
import FormCore from 'components/Form/Core';

export default function ModalAddManageToken() {

  const { modal, setModal } = useContext(CoreContext)

  const close = () => {
    setModal(null)
  }

  const handleSave = () => {
    // do something
    close()
  }

  const formItems = [
    {
      ref: 'name',
      type: 'text',
      placeholder: 'Nome',
      required: true,
      full: true,
      height: '56px',

    },
    {
      ref: 'type',
      type: 'text',
      placeholder: 'Tipo',
      options: [{ id: 'OpenAi', title: 'OpenAi', name: 'OpenAi' }, { id: 'Dify', title: 'Dify', name: 'Dify' },],
      required: true,
      full: true,
    },
    {
      ref: 'token',
      type: 'text',
      placeholder: 'Token',
      required: true,
      full: true,
      height: '56px',
    },
  ]

  return (
    <>
      <Wrapper>
        <Title upper nomargin>Adicionar Token</Title>
        {/* <FormText>Preencha algum texto caso precise</FormText> */}
        <FormSpacer />
        <FormCore formItems={formItems} />
        <FormSpacer />
        <CompanyButtonContainer>
          <Button onClick={close} color='lightgrey' nospace>Cancelar</Button>
          <Button primary onClick={handleSave} color='primary' nospace>Salvar</Button>
        </CompanyButtonContainer>
      </Wrapper>
    </>
  )
}
