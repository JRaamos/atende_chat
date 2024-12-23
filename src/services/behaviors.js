
import { toast } from "react-toastify";
import { GET, POST, PUT, DELETE } from "./api";
import { supabase } from "./createClient";

export const CreateBehavior = async (behavior) => {
  const { data, error } = await supabase
    .from('behaviors')
    .insert(behavior)
    .select();

  if (error) {
    toast.error('Erro ao criar comportamento', error);
    return null;
  }

  toast.success('Comportamento criado com sucesso!');
  return data[0];

};

export const GetBehaviors = async () => {
  const { data, error } = await supabase
    .from('behaviors')
    .select('*');

  if (error) {
    toast.error('Erro ao buscar comportamentos', error);
    return [];
  }

  return data;
};

export const UpdateBehavior = async (id, behavior) => {
  const { error } = await supabase
    .from('behaviors')
    .update(behavior)
    .eq('id', id).select();

  if (error) {
    toast.error('Erro ao atualizar comportamento', error);
    return null;
  }

  toast.success('Comportamento atualizado com sucesso!');
  return true;
};

export const DeleteBehavior = async (id) => {
  const { error } = await supabase
    .from('behaviors')
    .delete()
    .eq('id', id);

  if (error) {
    toast.error('Erro ao deletar comportamento', error);
    return null;
  }

  return true;
};