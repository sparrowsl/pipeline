//@ts-check
import { supabase } from '$lib/server/supabase.js';

export async function createTeamMember(userId, projectId) {
  const { data, error } = await supabase
    .from('project_members')
    .insert([
      {
        user_id: userId,
        project_id: projectId,
        creator_id: userId,
      },
    ])
    .select();
  if (error) throw new Error(error.message);
  return data[0];
}
