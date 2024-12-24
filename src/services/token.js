
import { toast } from "react-toastify";
import { GET, POST, PUT, DELETE } from "./api";
import { supabase } from "./createClient";

export const CreateToken = async (token) => {
  const { data, error } = await supabase
    .from('token')
    .insert(token).select();
  if (error) {
    toast.error('Erro ao criar token', error);
    return null;
  }
  toast.success('Token criado com sucesso!');
  return data[0];
};

export const ReadToken = async () => {
  const { data, error } = await supabase
    .from('token')
    .select('*');

  if (error) {
    toast.error('Erro ao buscar token:', error);
    return null;
  }

  return data;
};


export const ReadTokenById = async (id) => {
  const { data, error } = await supabase
    .from('token')
    .select('*')
    .eq('id', id);

  if (error) {
    toast.error('Erro ao buscar token:', error);
    return null;
  }

  return data[0];
}

export const UpdateToken = async (id, token) => {

  const { data, error } = await supabase
    .from('token')
    .update(token)
    .eq('id', id)
    .select();

  if (error) {
    toast.error('Erro ao atualizar token', error);
    return null;
  }
  toast.success('Token atualizado com sucesso!');
  return data;
};

export const DeleteToken = async (id) => {
  const { error } = await supabase
    .from('token')
    .delete()
    .eq('id', id)
    .select();

  if (error) {
    toast.error('Erro ao deletar token', error);
    return null;
  }

  toast.success('Token deletado com sucesso!');
  return true;
};