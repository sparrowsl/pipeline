import { supabase } from '$lib/server/supabase.js';

export async function getDpgStatuses(projectIds) {
  const { data, error } = await supabase
    .from('project_dpg_status')
    .select('project_id')
    .in('project_id', projectIds);

  if (error) throw new Error(error.message);
  return data || [];
}
