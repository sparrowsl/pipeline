import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    // Retrieve page and limit from the query parameters, with defaults if not provided
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '6', 10);
    const start = (page - 1) * limit;
    const end = start + limit - 1;

  
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .range(start, end); 


      if (error) throw error;
  
      return json({ projects: data }, { status: 200 });
    } catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
  }