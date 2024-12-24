import { CoreContext } from 'context/CoreContext'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FormSpacer, FormText, Title } from 'ui/styled'
import { CompanyButtonContainer } from './styled'
import Wrapper from '../Wrapper';
import Button from 'components/Form/Button';
import FormCore from 'components/Form/Core';
import { CreateToken, ReadToken, ReadTokenById, UpdateToken } from 'services/token';

export default function ModalAddManageToken() {

  const { modal, setModal } = useContext(CoreContext)

  const refForm = useRef()

  const [register, setRegister] = useState({})

  const close = () => {
    setModal(null)
  }

  const handleSave = async () => {
    const detailsForm = refForm?.current?.getForm()

    const payload = {
      name: detailsForm.name,
      type: detailsForm.type,
      token: detailsForm.token,
    }
    const result = modal?.id ? await UpdateToken(modal?.id, payload) : await CreateToken(payload)
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

  const init = async () => {
    if (modal?.id) {
      const result = await ReadTokenById(modal.id)
      if (result) {
        setRegister(result)
      }
    }
  }

  useEffect(() => { init() }, [modal])


  return (
    <>
      <Wrapper>
        <Title upper nomargin>Adicionar Token</Title>
        {/* <FormText>Preencha algum texto caso precise</FormText> */}
        <FormSpacer />
        <FormCore formItems={formItems} ref={refForm} register={register} />
        <FormSpacer />
        <CompanyButtonContainer>
          <Button onClick={close} color='lightgrey' nospace>Cancelar</Button>
          <Button primary onClick={handleSave} color='primary' nospace>
            {modal?.id ? 'Atualizar' : 'Salvar'}
          </Button>
        </CompanyButtonContainer>
      </Wrapper>
    </>
  )
}
