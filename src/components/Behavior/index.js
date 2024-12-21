import Wrapper from 'components/Wrapper'
import React, { useState } from 'react'
import { BehaviorContainer } from './styled'

export default function Behavior() {

  const [form, setForm] = useState({})
  const formValue = ref => { return form?.[ref] ? form?.[ref] : ''; }
  const changeForm = (value, ref) => { setForm({ ...form, [ref]: value }); }

  return (
    <>
      <BehaviorContainer>
        <Wrapper title="Número máximo de respostas">

        </Wrapper>
      </BehaviorContainer>
    </>
  )
}
