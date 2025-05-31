import { getProjectResource } from '$lib/server/service/projectContributionsService.js';
import { json } from '@sveltejs/kit';

export async function GET({ params, locals, setHeaders }) {
  const { id } = params;
  let supabase = locals.supabase;

  try {
    const resource = await getProjectResource(id, supabase);

    setHeaders({
      'Cache-Control': 'public, max-age=600, stale-while-revalidate=300',
      Vary: 'Accept-Encoding',
    });

    return json({ resources: resource }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
