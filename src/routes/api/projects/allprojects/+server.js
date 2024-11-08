import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  // Retrieve page and limit from the query parameters, with defaults if not provided
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "6", 10);
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  try {
    const { data: projects, error: projectsError } = await supabase
      .from("projects")
      .select("*")
      .range(start, end)
      .order("created_at", { ascending: false });

    if (projectsError) {
      return json({ error: projectsError.message }, { status: 500 });
    }

    if (!projects || projects.length === 0) {
      return json({ projects: [] }, { status: 200 });
    }

    // Extract unique project_ids from projects
    const projectIds = projects.map((project) => project.id);

    const { data: projectCategories, error: pivotError } = await supabase
      .from("category_project")
      .select("project_id, category_id")
      .in("project_id", projectIds);

    if (pivotError) {
      return json({ error: pivotError.message }, { status: 500 });
    }

    //get the categories for each project
    const categoryIds = [
      ...new Set(projectCategories.map((pc) => pc.category_id)),
    ];
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("*")
      .in("id", categoryIds);

    if (categoriesError) {
      return json({ error: categoriesError.message }, { status: 500 });
    }

    const categoriesById = categories.reduce((acc, category) => {
      acc[category.id] = category;
      return acc;
    }, {});

    //get the dpg status
    const { data: projectDpgStatuses, error: dpgStatusError } = await supabase
      .from("project_dpg_status")
      .select("project_id")
      .in("project_id", projectIds);

    if (dpgStatusError) {
      return json({ error: dpgStatusError.message }, { status: 500 });
    }

    const dpgStatusCountByProject = projectDpgStatuses.reduce((acc, status) => {
      acc[status.project_id] = (acc[status.project_id] || 0) + 1;
      return acc;
    }, {});

    //Attach categories to each project
    const projectsWithTagsAndStatusCount = projects.map((project) => {
      const tagsForProject = projectCategories
        .filter((pc) => pc.project_id === project.id)
        .map((pc) => categoriesById[pc.category_id]);

      return {
        ...project,
        tags: tagsForProject.filter(Boolean), // Filter out any null values
        dpgStatusCount: dpgStatusCountByProject[project.id] || "", // Default to 0 if no statuses found
      };
    });

    return json({ projects: projectsWithTagsAndStatusCount }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
