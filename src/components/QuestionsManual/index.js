import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { QuestionsManualContainer } from './styled'
import FormCore from 'components/Form/Core'
import Button from 'components/Form/Button'
import { ButtonContainer, FormSpacer, Icon } from 'ui/styled'
import { CreateKnowledgeBase, GetKnowledgeBaseWithDetails } from 'services/knowledge-base'
import { CoreContext } from 'context/CoreContext'
import { CreateQuestion, DeleteQuestion, GetQuestions, UpdateQuestion } from 'services/questions'
import { CreateAnswer } from 'services/answers'
import { toast } from 'react-toastify'
import BasicTable from 'components/Form/Table'
import { ReadOneAgent } from 'services/agentsIa'

export default function QuestionsManual() {
  const [register, setRegister] = useState({});
  const [questions, setQuestions] = useState([]);
  const [registers, setRegisters] = useState([]);
  const { knowledgeId, setKnowledgeId } = useContext(CoreContext);

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  const refForm = useRef();

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
  ];

  const initQuestions = async () => {
    if (knowledgeId) {
      const result = await GetQuestions(knowledgeId);
      if (result) {
        setRegisters(
          result.map((item) => ({
            question: item.question,
            answer: item.answers.answer,
            id: item.id,
          }))
        );
      }
    }
  };

  const addQuestion = async () => {
    let id = knowledgeId;
    const data = refForm?.current?.getForm();

    if (!id) {
      const result = await CreateKnowledgeBase({});
      if (result) {
        id = result.id;
      } else {
        return;
      }
    }

    if (register?.id && data) {
      const updatedResult = await UpdateQuestion({
        questionId: register.id,
        question: data.question,
        answer: data.answers
      });

      if (updatedResult) {
        await initQuestions();
        toast.success('Pergunta atualizada com sucesso');
      }
    } else if (data) {
      const answerResult = await CreateAnswer({ answer: data.answers });
      if (answerResult) {
        const questionResult = await CreateQuestion({
          question: data.question,
          knowledgeBaseId: id,
          answerId: answerResult.id
        });
        if (questionResult) {
          await initQuestions();
          setKnowledgeId(id);
          toast.success('Pergunta criada com sucesso');
        }
      }
    }

    refForm?.current?.clearForm();
    setRegister({});
  };

  const cancelEdit = () => {
    setRegister({});
    refForm?.current?.clearForm();
  };

  const editQuestion = (questionData) => {
    setRegister({
      question: questionData.question,
      answers: questionData.answer,
      id: questionData.id,
    });
  };

  const removeQuestion = async (id) => {
    const result = await DeleteQuestion(id);
    if (result) {
      await initQuestions();
    }
  }

  useEffect(() => { initQuestions(); }, [knowledgeId]);

  const columns = [
    { title: 'Perguntas', ref: 'question' },
    { title: 'Respostas', ref: 'answer' },
    {
      title: 'Ações',
      renderCell: ({ row }) => (
        <>
          <ButtonContainer center space noResponsive>
            <Icon
              icon='edit'
              nomargin
              pointer
              onClick={() => editQuestion(row)}
            />
            <Icon icon='trash' nomargin pointer onClick={() => removeQuestion(row?.id)} />
          </ButtonContainer>
        </>
      ),
    },
  ];

  const rows = useMemo(() => {
    return (registers || []);
  }, [registers]);

  const init = async () => {
    if (id) {
      const result = await ReadOneAgent(id)
      if (result?.knowledgeBase) {
        setKnowledgeId(result?.knowledgeBase?.id)
      }
    }
  }

  useEffect(() => { init() }, [])

  useEffect(() => {
    return () => {
      setKnowledgeId(null);
    };
  }, []);


  return (
    <>
      <QuestionsManualContainer>
        <FormCore formItems={formItems} ref={refForm} register={register} />
        <FormSpacer />
        <ButtonContainer end space>
          <Button color='primary' width={'fit-Content'} nospace onClick={addQuestion}>
            {register?.id ? 'Atualizar' : 'Adicionar'}
          </Button>
          {register?.id && (
            <Button color='primary' outline width={'fit-Content'} nospace onClick={cancelEdit}>
              Cancelar
            </Button>
          )}
        </ButtonContainer>
        <FormSpacer />
        <BasicTable columns={columns} rows={rows} border />
      </QuestionsManualContainer >
    </>
  );
}