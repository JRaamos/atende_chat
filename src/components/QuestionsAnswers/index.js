import React, { useState } from 'react'
import { QuestionsAnswersContainer, RadiosContainer } from './styled'
import Radio from 'components/Form/Radio'
import QuestionsManual from 'components/QuestionsManual';
import QuestionsFile from 'components/QuestionsFile';

export default function QuestionsAnswers() {

  const [questionOption, setQuestionOption] = useState('manual');

  const options = [
    { label: "Inserir manualmente", value: "manual", },
    { label: "Importar de arquivo", value: "file" },
  ]

  return (
    <>
      <QuestionsAnswersContainer>
        <RadiosContainer>
          {options.map((option, index) => (
            <Radio key={index} checked={questionOption === option?.value} onChange={() => setQuestionOption(option?.value)} label={option?.label} />))}
        </RadiosContainer>
        {questionOption === 'manual' ? <QuestionsManual /> : null}
        {questionOption === 'file' ? <QuestionsFile /> : null}
      </QuestionsAnswersContainer>
    </>
  )
}
