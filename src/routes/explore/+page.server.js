import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const currentPage = url.searchParams.get('page') || 1;
  const itemsPerPage = url.searchParams.get('limit') || 6;

  const [allProjects, topProjects] = await Promise.allSettled([
    fetchAllProjects(currentPage, itemsPerPage),
    fetchTopProjects(),
  ]);

  return {
    allProjects,
    topProjects,
  };
}

/**
 * @param {number} page
 * @param {number} limit
 * @returns {Promise<any>}
 */
async function fetchAllProjects(page = 1, limit = 6) {
  try {
    const response = await fetch(`/api/projects/allprojects?page=${page}&limit=${limit}`);
    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (e) {
    error(404);
  }
}

async function fetchTopProjects() {
  try {
    const response = await fetch('/api/projects/allprojects?limit=3');
    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (e) {
    error(404);
  }
}
