import Input from 'components/Form/Input';
import React, { useState } from 'react'
import { Container, WebSitesContainer } from './styled';
import { ButtonContainer } from 'ui/styled';
import Button from 'components/Form/Button';
import { InputLabel } from '@mui/material';

export default function WebSites() {

  const [form, setForm] = useState({})
  const formValue = ref => { return form?.[ref] ? form?.[ref] : ''; }
  const changeForm = (value, ref) => { setForm({ ...form, [ref]: value }); }

  const [responseTime, setResponseTime] = useState(false)

  return (
    <>
      <WebSitesContainer>

        <Container>
          <Input label="WebSite" type="text" value={formValue('site')} onChange={e => changeForm(e.target.value, 'site')} onSubmitEditing />
        </Container>

        <Container>
          <InputLabel small nomargin>Responder na transferência de atendimento?</InputLabel>
          <ButtonContainer space>
            <Container>
              <Button color={responseTime ? 'blue' : 'lightgrey'} nospace onClick={() => setResponseTime(!responseTime)}> Sim </Button>
            </Container>
            <Container>
              <Button color={responseTime ? 'lightgrey' : 'blue'} onClick={() => setResponseTime(!responseTime)} nospace>Não</Button>
            </Container>
            <Button color='primary' width={'fit-Content'} nospace>Adicionar</Button>
          </ButtonContainer>
        </Container>

      </WebSitesContainer>
    </>
  )
}
