import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ url, params }) {
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const limit = parseInt(url.searchParams.get('limit') || '6', 10);
  const categoryId = params.id;
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  try {
    const { data: categoryProjects, error: categoryError } = await supabase
      .from('category_project')
      .select('project_id')
      .eq('category_id', categoryId)
      .range(start, end);

    if (categoryError) {
      throw categoryError;
    }

    const projectIds = categoryProjects.map((cp) => cp.project_id);

    if (projectIds.length === 0) {
      return json({ projects: [] }, { status: 200 });
    }

    const { data: projects, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .in('id', projectIds)
      .order('created_at', { ascending: false });

    if (projectError) {
      throw projectError;
    }

    const { data: projectCategories, error: pivotError } = await supabase
      .from('category_project')
      .select('project_id, category_id')
      .in('project_id', projectIds);

    if (pivotError) {
      throw pivotError;
    }

    const categoryIds = [...new Set(projectCategories.map((pc) => pc.category_id))];
    const { data: categories, error: categoryDetailsError } = await supabase
      .from('categories')
      .select('*')
      .in('id', categoryIds);

    if (categoryDetailsError) {
      throw categoryDetailsError;
    }

    const categoriesById = categories.reduce((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {});

    //get the dpg status
    const { data: projectDpgStatuses, error: dpgStatusError } = await supabase
      .from('project_dpg_status')
      .select('project_id')
      .in('project_id', projectIds);

    if (dpgStatusError) {
      return json({ error: dpgStatusError.message }, { status: 500 });
    }

    const dpgStatusCountByProject = projectDpgStatuses.reduce((acc, status) => {
      acc[status.project_id] = (acc[status.project_id] || 0) + 1;
      return acc;
    }, {});

    const projectsWithTagsAndStatusCount = projects.map((project) => {
      const tagsForProject = projectCategories
        .filter((pc) => pc.project_id === project.id)
        .map((pc) => categoriesById[pc.category_id]);

      return {
        ...project,
        tags: tagsForProject.filter(Boolean), // Filter out any null values
        dpgStatusCount: dpgStatusCountByProject[project.id] || '', // Default to 0 if no statuses found
      };
    });

    return json({ projects: projectsWithTagsAndStatusCount }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
