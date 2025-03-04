/** @type {import('./$types').PageServerLoad} */
export async function load({ parent }) {
  const { project } = await parent();

  const linkSplit = project?.github?.split('/') || [];
  const repoName = linkSplit[3] + '/' + linkSplit[4];

  try {
    const res = await fetch(`https://api.github.com/repos/${repoName}/contributors`);
    const data = await res.json();

    // Only return the first few contributors
    return { contributors: data.slice(0, 4) };
  } catch (e) {
    console.log(e);
    return { contributors: [] };
  }
}
