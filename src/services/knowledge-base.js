import { toast } from "react-toastify";
import { supabase } from "./createClient";

export const CreateKnowledgeBase = async (knowledgeBase) => {
  const { data, error } = await supabase
    .from('knowledge-base')
    .insert(knowledgeBase)
    .select();

  if (error) {
    toast.error('Erro ao criar base de conhecimento: ' + error.message);
    return null;
  }

  toast.success('Base de conhecimento criada com sucesso!');
  return data[0];
};

export const GetKnowledgeBaseWithDetails = async (knowledgeBaseId) => {
  // Buscar perguntas associadas ao ID da base de conhecimento

  const { data: questions, error: questionError } = await supabase
    .from('questions')
    .select(`
      id,

    `)
    .eq('knowledgeBaseId', knowledgeBaseId);
  console.log(questions, knowledgeBaseId)

  if (questionError) {
    toast.error('Erro ao buscar perguntas e respostas: ' + questionError.message);
    return [];
  }

  return questions; // Retorna todas as perguntas com suas respostas associadas
};


export const GetKnowledgeBaseByQuestionId = async (questionId) => {
  const { data, error } = await supabase
    .from('knowledge-base')
    .select(`
      id,
      question_id,
      answer_id,
      resource_id,
      questions (id, name), -- Relacionamento com questions
      answers (id, content), -- Relacionamento com answers
      resources (id, type, content) -- Relacionamento com resources
    `)
    .eq('question_id', questionId);

  if (error) {
    toast.error('Erro ao buscar base de conhecimento por pergunta: ' + error.message);
    return [];
  }

  return data;
};

// Atualizar uma entrada na base de conhecimento
export const UpdateKnowledgeBase = async (id, knowledgeBase) => {
  const { error } = await supabase
    .from('knowledge-base') // Nome da tabela
    .update(knowledgeBase)
    .eq('id', id) // Filtra pelo ID
    .select();

  if (error) {
    toast.error('Erro ao atualizar base de conhecimento: ' + error.message);
    return null;
  }

  toast.success('Base de conhecimento atualizada com sucesso!');
  return true;
};

// Deletar uma entrada na base de conhecimento
export const DeleteKnowledgeBase = async (id) => {
  const { error } = await supabase
    .from('knowledge-base') // Nome da tabela
    .delete()
    .eq('id', id); // Filtra pelo ID

  if (error) {
    toast.error('Erro ao deletar base de conhecimento: ' + error.message);
    return null;
  }

  toast.success('Base de conhecimento deletada com sucesso!');
  return true;
};