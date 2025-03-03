import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ parent, params, fetch }) {
  await parent();

  try {
    const [projectRes, updatesRes, resourcesRes] = await Promise.all([
      fetch(`/api/projects/singleProject/${params.id}`),
      fetch(`/api/projects/singleProject/${params.id}/projectUpdates`),
      fetch(`/api/projects/singleProject/${params.id}/contribution/resources`),
    ]);

    if (!projectRes.ok || !updatesRes.ok || !resourcesRes.ok) {
      return error(400, { message: 'Failed to fetch project' });
    }

    const [projectData, updatesData, resourcesData] = await Promise.all([
      projectRes.json(),
      updatesRes.json(),
      resourcesRes.json(),
    ]);

    return {
      project: projectData.project || [],
      updates: updatesData.projectUpdates || [],
      resources: resourcesData.resources || [],
    };
  } catch (e) {
    console.log(e);
    return error(500, { message: e.message });
  }
}
