//@ts-check

import { json } from '@sveltejs/kit';
import { getRepoContributors, parseGithubUrl } from '$lib/server/github.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { url } = await request.json();

  console.log('Fetching GitHub data for:', url);

  const { owner, repo } = parseGithubUrl(url);
  if (!owner || !repo) {
    return json({ success: false, message: 'Invalid GitHub repository URL' });
  }

  try {
    const contributors = await getRepoContributors(owner, repo);

    return json({ success: true, contributors });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return json({ success: false, message: 'Error fetching GitHub data' });
  }
}
