import { supabase } from '$lib/server/supabase.js';
import { getProjectById } from '$lib/server/service/projectService.js';
import { json } from '@sveltejs/kit';

export async function GET({ request, params }) {
  const projectId = params.id;

  try {
    const project = await getProjectById(projectId);

    return json({ project: project }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
