import { supabase } from '$lib/server/supabase.js';

export async function getAllDpgStatuses() {
  const { data, error } = await supabase.from('dpg_status').select('*');
  if (error) throw new Error(error.message);
  return data || [];
}
export async function getDpgStatuses(projectIds) {
  const { data, error } = await supabase
    .from('project_dpg_status')
    .select('project_id')
    .in('project_id', projectIds);

  if (error) throw new Error(error.message);
  return data || [];
}
