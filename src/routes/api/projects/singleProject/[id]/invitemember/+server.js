import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
    const { id } = params;
    
    // Use `id` and `projectUpdateId` to fetch comments for the specified update in the project
    // Example:
    // const comments = await fetchComments(id, projectUpdateId);
    return new Response(id);
  }