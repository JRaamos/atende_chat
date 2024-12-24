import { toast } from "react-toastify";
import { supabase } from "./createClient";

// Criar uma nova resposta
export const CreateAnswer = async (answer) => {
  const { data, error } = await supabase
    .from('answers') // Nome da tabela 'answers'
    .insert(answer)
    .select();

  if (error) {
    toast.error('Erro ao criar resposta: ' + error.message);
    return null;
  }

  toast.success('Resposta criada com sucesso!');
  return data[0];
};

// Buscar respostas por ID da pergunta
export const GetAnswersByQuestionId = async (questionId) => {
  const { data, error } = await supabase
    .from('answers') // Nome da tabela 'answers'
    .select('*')
    .eq('question_id', questionId); // Filtrar pela chave estrangeira 'question_id'

  if (error) {
    toast.error('Erro ao buscar respostas: ' + error.message);
    return [];
  }

  return data;
};

// Atualizar uma resposta
export const UpdateAnswer = async (id, answer) => {
  const { error } = await supabase
    .from('answers') // Nome da tabela 'answers'
    .update(answer)
    .eq('id', id) // Filtrar pelo ID da resposta
    .select();

  if (error) {
    toast.error('Erro ao atualizar resposta: ' + error.message);
    return null;
  }

  toast.success('Resposta atualizada com sucesso!');
  return true;
};

// Deletar uma resposta
export const DeleteAnswer = async (id) => {
  const { error } = await supabase
    .from('answers') // Nome da tabela 'answers'
    .delete()
    .eq('id', id); // Filtrar pelo ID da resposta

  if (error) {
    toast.error('Erro ao deletar resposta: ' + error.message);
    return null;
  }

  toast.success('Resposta deletada com sucesso!');
  return true;
};