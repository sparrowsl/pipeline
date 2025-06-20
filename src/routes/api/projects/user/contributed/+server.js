import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';
import {
  getUserBookmarkedProjects,
  getUserContributedProjects,
} from '$lib/server/service/projectService.js';

export async function GET({ request, locals, setHeaders }) {
  let user = locals.authUser;
  let supabase = locals.supabase;

  try {
    const projects = await getUserContributedProjects(user.id, supabase);

    setHeaders({
      'Cache-Control': 'public, max-age=600, stale-while-revalidate=300',
      Vary: 'Accept-Encoding',
    });

    return json({ projects: projects }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
