import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '6', 10);
    const tag = url.searchParams.get('tag');
    const start = (page - 1) * limit;
    const end = start + limit - 1;

    console.log('tag:', tag);
  
    try {
      let query = supabase.from('projects').select('*');

      // Use JSONB contains operator with a dynamically passed JSON array
      if (tag) {
        // JSON.stringify converts `tag` into a valid JSON array format
        query = query.contains('tags', JSON.stringify([tag]));
    }

      // Apply pagination after filtering
      query = query.range(start, end);

      const { data, error } = await query;

      console.log('data:', data);
      console.log('error:', error);

      if (error) throw error;

      console.log('Filtered projects by tags:', data);

      return json({ projects: data }, { status: 200 });

    } catch (error) {
      return json({ error: error.message }, { status: 500 });
    }
  }