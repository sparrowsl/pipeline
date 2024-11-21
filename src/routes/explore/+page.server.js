import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
  const currentPage = url.searchParams.get('page') || 1;
  const itemsPerPage = url.searchParams.get('limit') || 6;

  const [{ projects: allProjects }, { projects: topProjects }] = await Promise.all([
    fetch(`/api/projects?page=${currentPage}&limit=${itemsPerPage}`).then(parseJsonResponse),
    fetch(`/api/projects?limit=3`).then(parseJsonResponse),
  ]);

  return { allProjects, topProjects };
}

const parseJsonResponse = (res) => {
  if (!res.ok) throw error(404);
  return res.json();
};
