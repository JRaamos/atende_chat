
import { toast } from "react-toastify";
import { GET, POST, PUT, DELETE } from "./api";
import { supabase } from "./createClient";

export const CreateAgentIa = async (agentIa) => {
  const { data, error } = await supabase
    .from('agentes-ia')
    .insert(agentIa)
    .select();

  if (error) {
    toast.error('Erro ao criar agente IA', error);
    return null;
  }

  toast.success('Agente IA criado com sucesso!');
  return data[0];

};

export const ReadAgents = async () => {
  const { data, error } = await supabase
    .from('agentes-ia')
    .select(`
      *,
      profile:profileId (*),
      behavior:behaviorId (*)
    `);

  if (error) {
    console.error('Erro ao buscar agentes:', error);
    return null;
  }

  const formattedData = data.map(agent => ({
    ...agent,
    name: agent.profile?.name
  }));

  return formattedData;
};

export const ReadOneAgent = async (id) => {
  const { data, error } = await supabase
    .from('agentes-ia')
    .select(`
      *,
      profile:profileId (*),
      behavior:behaviorId (*)
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar agente:', error);
    return null;
  }

  const formattedData = {
    ...data,
    name: data.profile?.name,
  };

  return formattedData;
};

export const UpdateAgent = async (id, agent) => {
  const { data, error } = await supabase
    .from('agentes-ia')
    .update({
      profileId: agent.profileId,
      behaviorId: agent.behaviorId,
      role: agent.role,
      status: agent.status
    })
    .eq('id', id);

  if (error) {
    console.error('Erro ao atualizar agente:', error);
    return null;
  }

  return data;
};

export const DeleteAgent = async (id) => {
  const { data, error } = await supabase
    .from('agentes-ia')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Erro ao excluir agente:', error);
    return null;
  }

  return data;
};

