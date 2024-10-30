
import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
    const { id, updateId } = params;
    
    try {
      const { data, error } = await supabase
        .from('project_update_comment')
        .select('*')
        .eq('project_id', id)
        .eq('update_id', updateId);

      return json({ comments: data }, { status: 200 });
      
    } catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
  }