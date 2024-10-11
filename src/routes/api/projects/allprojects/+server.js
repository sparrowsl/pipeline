import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ request }) {

    try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')

        return json({ projects: data }, { status: 200 });
    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}