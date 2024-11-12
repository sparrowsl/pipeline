import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
  const { id } = params;

  const { data, error } = await supabase
    .from('project_members')
    .select('*')
    .eq('project_id', id)
    .order('created_at', { ascending: false });
}
