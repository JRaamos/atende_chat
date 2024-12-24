import { toast } from "react-toastify";
import { supabase } from "./createClient";

export const CreateResource = async (resource) => {
  const { data, error } = await supabase
    .from('resources')
    .insert(resource)
    .select();

  if (error) {
    toast.error('Erro ao criar recurso: ' + error.message);
    return null;
  }

  toast.success('Recurso criado com sucesso!');
  return data[0];
};

export const GetResourcesByQuestionId = async (knowledgeBaseId) => {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('knowledgeBaseId', knowledgeBaseId)

  if (error) {
    toast.error('Erro ao buscar recursos: ' + error.message);
    return [];
  }

  return data;
};

// Atualizar um recurso
export const UpdateResource = async (id, resource) => {
  const { error } = await supabase
    .from('resources') // Nome da tabela
    .update(resource)
    .eq('id', id) // Filtrar pelo ID do recurso
    .select();

  if (error) {
    toast.error('Erro ao atualizar recurso: ' + error.message);
    return null;
  }

  toast.success('Recurso atualizado com sucesso!');
  return true;
};

// Deletar um recurso
export const DeleteResource = async (id) => {
  const { error } = await supabase
    .from('resources') // Nome da tabela
    .delete()
    .eq('id', id); // Filtrar pelo ID do recurso

  if (error) {
    toast.error('Erro ao deletar recurso: ' + error.message);
    return null;
  }

  toast.success('Recurso deletado com sucesso!');
  return true;
};