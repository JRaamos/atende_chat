import React from 'react'
import { QuestionsManualContainer } from './styled'
import FormCore from 'components/Form/Core'
import Button from 'components/Form/Button'
import { ButtonContainer, FormSpacer } from 'ui/styled'

export default function QuestionsManual() {

  const formItems = [
    {
      ref: 'question',
      type: 'text',
      label: 'Pergunta',
      full: true,
      required: true,
      white: true,
    },
    {
      ref: 'answers',
      type: 'textarea',
      label: 'Respostas',
      full: true,
      required: true,
      height: 100,
      white: true,
      text: '(Detalhe um pouco mais a sua resposta, se for muito direto, é possível que a IA haja da mesma forma.)',
    }
  ]
  return (
    <>
      <QuestionsManualContainer>

        <FormCore formItems={formItems} />
        <FormSpacer />
        <ButtonContainer end>
          <Button color='primary' width={'fit-Content'} nospace>Adicionar</Button>
        </ButtonContainer>

      </QuestionsManualContainer>
    </>
  )
}
