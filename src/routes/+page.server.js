import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase.js';

export function load() {
    throw redirect(307, '/explore');
}
