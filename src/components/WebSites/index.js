import Input from 'components/Form/Input';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Container, WebSitesContainer } from './styled';
import { ButtonContainer, Icon } from 'ui/styled';
import Button from 'components/Form/Button';
import { InputLabel } from '@mui/material';
import { CoreContext } from 'context/CoreContext';
import { CreateKnowledgeBase } from 'services/knowledge-base';
import { CreateResource, GetResourcesByQuestionId, UpdateResource, DeleteResource } from 'services/resources';
import BasicTable from 'components/Form/Table';
import { ReadOneAgent } from 'services/agentsIa';

export default function WebSites() {

  const [form, setForm] = useState({});
  const formValue = ref => { return form?.[ref] ? form?.[ref] : ''; };
  const changeForm = (value, ref) => { setForm({ ...form, [ref]: value }); };
  const [registers, setRegisters] = useState([]);

  const [responseTime, setResponseTime] = useState(false);

  const { knowledgeId, setKnowledgeId } = useContext(CoreContext);

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get('id');

  const fetchRegisters = async () => {
    if (knowledgeId) {
      const response = await GetResourcesByQuestionId(knowledgeId);
      setRegisters(response || []);
    }
  };

  useEffect(() => { fetchRegisters(); }, [knowledgeId]);

  const resetForm = () => {
    setForm({});
    setResponseTime(false);
  };

  const save = async () => {
    let payload = {
      website: formValue('site'),
      subpastas: responseTime,
      knowledgeBaseId: knowledgeId
    };

    if (form.id) {
      const upResult = await UpdateResource(form.id, {
        website: formValue('site'),
        subpastas: responseTime,
      });
      resetForm();
      await fetchRegisters();
    } else {

      if (knowledgeId) {

        await CreateResource(payload);
      } else {

        const result = await CreateKnowledgeBase({});
        if (result) {
          setKnowledgeId(result.id);
          payload.knowledgeBaseId = result.id;
          await CreateResource(payload);
        }
      }
    }

    fetchRegisters();
    resetForm();
  };

  const editQuestion = async (row) => {
    setForm({ id: row.id, site: row.website });
    setResponseTime(row.subpastas);
  };

  const removeQuestion = async (id) => {
    await DeleteResource(id);
    fetchRegisters();
  };

  const columns = [
    { title: 'WebSite', ref: 'website' },
    {
      title: 'Navegar em subpastas',
      ref: 'subpastas',
      renderCell: ({ row }) => (
        <span>{row.subpastas ? 'Sim' : 'Não'}</span>
      ),
    },
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
    return registers || [];
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
      <WebSitesContainer>
        <Container>
          <Input label="WebSite" type="text" value={formValue('site')} onChange={e => changeForm(e.target.value, 'site')} onSubmitEditing />
        </Container>

        <Container>
          <InputLabel small nomargin>Navegar em subpastas</InputLabel>
          <ButtonContainer space>
            <Container>
              <Button color={responseTime ? 'blue' : 'lightgrey'} nospace onClick={() => setResponseTime(true)}> Sim </Button>
            </Container>
            <Container>
              <Button color={!responseTime ? 'blue' : 'lightgrey'} onClick={() => setResponseTime(false)} nospace>Não</Button>
            </Container>

            <Button
              color='primary'
              width={'fit-Content'}
              nospace
              onClick={save}
            >
              {form.id ? 'Editar' : 'Adicionar'}
            </Button>
          </ButtonContainer>
        </Container>

        <BasicTable columns={columns} rows={rows} border />
      </WebSitesContainer>
    </>
  );
}