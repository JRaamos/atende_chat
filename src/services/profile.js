
import { toast } from "react-toastify";
import { GET, POST, PUT, DELETE } from "./api";
import { supabase } from "./createClient";

export const CreateProfile = async (profile) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert(profile).select();
  if (error) {
    toast.error('Erro ao criar perfil', error);
    return null;
  }
  toast.success('Perfil criado com sucesso!');
  return data[0];
};

export const ReadProfiles = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*');

  if (error) {
    toast.error('Erro ao buscar perfis:', error);
    return null;
  }

  return data;
};

export const UpdateProfile = async (id, profile) => {

  const { data, error } = await supabase
    .from('profiles')
    .update(profile)
    .eq('id', id)
    .select();

  if (error) {
    toast.error('Erro ao atualizar perfil', error);
    return null;
  }
  toast.success('Perfil atualizado com sucesso!');
  return data;
};

export const DeleteProfile = async (id) => {
  const { error } = await supabase
    .from('profiles')
    .delete()
    .eq('id', id);

  if (error) {
    toast.error('Erro ao deletar perfil', error);
    return null;
  }

  toast.success('Perfil deletado com sucesso!');
  return true;
};