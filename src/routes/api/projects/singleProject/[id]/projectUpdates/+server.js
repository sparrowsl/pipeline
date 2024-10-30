import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
    const { id } = params;
    
    try {

      const { data, error } = await supabase
        .from('project_updates')
        .select('*')
        .eq('project_id', id);

      return json({ projectUpdates: data }, { status: 200 });
      
    } catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
  }