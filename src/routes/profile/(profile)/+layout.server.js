import { error } from '@sveltejs/kit';
import { supabase } from '$lib/server/supabase.js';

/** @type {import("./$types").LayoutServerLoad} */
export async function load({ fetch, locals }) {
  try {
    // Load user data
    const userResponse = await fetch('/api/me');
    const { user, error: userError } = await userResponse.json();

    if (!userResponse.ok) {
      return error(404, { message: userError });
    }

    // Load user's created projects
    const projectsResponse = await fetch('/api/projects/user/projects');
    let projects = [];
    if (projectsResponse.ok) {
      const projectsData = await projectsResponse.json();
      projects = projectsData.projects || [];
    }

    // Load contributed projects (direct Supabase query)
    let contributedProjects = [];
    if (locals?.authUser?.id) {
      const subquery = await supabase
        .from('project_resource')
        .select('project_id')
        .eq('user_id', locals.authUser.id);

      const { data: contributed } = await supabase
        .from('projects')
        .select('*')
        .in('id', subquery?.data?.flatMap((d) => d.project_id) || []);

      contributedProjects = contributed || [];
    }

    // Load following/bookmarked projects
    const followingResponse = await fetch('/api/projects/user/bookmarks');
    let following = [];
    if (followingResponse.ok) {
      const followingData = await followingResponse.json();
      following = followingData.projects || [];
    }

    return {
      user,
      projects,
      contributedProjects,
      following,
    };
  } catch (_e) {
    return error(500, { message: _e.message });
  }
}
