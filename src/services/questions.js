import { toast } from "react-toastify";
import { supabase } from "./createClient";

// Criar uma nova pergunta
export const CreateQuestion = async (question) => {
  const { data, error } = await supabase
    .from('questions')
    .insert(question)
    .select();

  if (error) {
    toast.error('Erro ao criar pergunta: ' + error.message);
    return null;
  }

  toast.success('Pergunta criada com sucesso!');
  return data[0];
};

export const GetQuestions = async (knowledgeBaseId) => {
  const { data, error } = await supabase
    .from('questions')
    .select(`
      *,
      answers:answerId (*)
      `).eq('knowledgeBaseId', knowledgeBaseId);

  if (error) {
    toast.error('Erro ao buscar perguntas: ' + error.message);
    return [];
  }

  return data;
};


export const UpdateQuestion = async ({ questionId, question, answer }) => {
  // Atualiza a resposta primeiro, pois a pergunta depende de uma resposta.
  const { data: answerData, error: answerError } = await supabase
    .from('answers')
    .upsert({ answer }) // Upsert garante que se a resposta não existir, ela será criada
    .eq('questionId', questionId) // Supondo que cada resposta esteja associada a uma pergunta
    .select();

  if (answerError) {
    toast.error('Erro ao atualizar resposta: ' + answerError.message);
    return null;
  }

  // Atualiza a pergunta com a nova resposta vinculada
  const { error: questionError } = await supabase
    .from('questions')
    .update({ question, answerId: answerData[0].id }) // Assume-se que o ID da resposta é necessário
    .eq('id', questionId).select();

  if (questionError) {
    toast.error('Erro ao atualizar pergunta: ' + questionError.message);
    return null;
  }

  toast.success('Pergunta e resposta atualizadas com sucesso!');
  return true;

};

export const DeleteQuestion = async (id) => {
  const { error } = await supabase
    .from('questions')
    .delete()
    .eq('id', id);

  if (error) {
    toast.error('Erro ao deletar pergunta: ' + error.message);
    return null;
  }

  toast.success('Pergunta deletada com sucesso!');
  return true;
};