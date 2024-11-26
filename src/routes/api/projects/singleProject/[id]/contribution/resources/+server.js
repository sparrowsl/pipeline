import { getProjectResource } from '$lib/server/service/projectContributionsService.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
  const { id } = params;

  try {
    const resource = await getProjectResource(id);

    return json({ resources: resource }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
