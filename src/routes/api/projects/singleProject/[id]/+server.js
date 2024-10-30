import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ request, params }) {
   
    const id = params.id;

    try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('id', id)
          .single();

        return json({ project: data }, { status: 200 });
    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }

}