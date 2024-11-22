import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';
import { getUserProjects } from '$lib/server/service/projectService.js';

/**
 * @deprecated
 * Depricating in favour off /api/projects
 * TODO: use builder pattern
 */
export async function GET({ request, url }) {
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '6', 10);
  const start = (page - 1) * limit;
  const end = start + limit - 1;
  const cookies = request.headers.get('cookie');

  if (!cookies) {
    return new Response(JSON.stringify({ error: 'No cookies found' }), {
      status: 401,
    });
  }

  // Parse cookies to extract the access token
  const accessToken = cookies
    .split(';')
    .find((cookie) => cookie.trim().startsWith('access_token='))
    ?.split('=')[1];

  if (!accessToken) {
    return new Response(JSON.stringify({ error: 'No access token found' }), {
      status: 401,
    });
  }

  // Get user data from Supabase using the access token
  const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);

  if (userError) {
    return json({ error: userError.message }, { status: 401 });
  }

  let user = userData.user;

  try {
    const projects = await getUserProjects(user.id, start, limit);

    return json({ projects: projects }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
