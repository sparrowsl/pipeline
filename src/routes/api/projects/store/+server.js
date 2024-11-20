import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';
import { storeProject } from '$lib/server/service/projectService.js';

export async function POST({ request }) {
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
    const projectData = await request.json();

    await storeProject(user, projectData);

    return json({ success: true }, { status: 200 });
  } catch (error) {
    return json({ erorr: 'Something went wrong' }, { status: 500 });
  }
}
