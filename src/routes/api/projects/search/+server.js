import { supabase } from "$lib/server/supabase.js";
import {
  fetchProjectCategories,
  fetchCategories,
  fetchDpgStatuses,
  mapProjectsWithTagsAndStatus,
} from "../projectUtils.js";
import { json } from "@sveltejs/kit";

export async function GET({ url }) {
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const limit = parseInt(url.searchParams.get("limit") || "6", 10);
  const term = url.searchParams.get("term") || "";

  const start = (page - 1) * limit;
  const end = start + limit - 1;

  try {
    const { data: projects, error: projectsError } = await supabase
      .from("projects")
      .select("*")
      .ilike("title", `%${term}%`)
      .range(start, end);

    if (projectsError) {
      return json({ error: projectsError.message }, { status: 500 });
    }

    if (!projects || projects.length === 0) {
      return json({ projects: [] }, { status: 200 });
    }

    const projectIds = projects.map((project) => project.id);

    const projectCategories = await fetchProjectCategories(projectIds);
    const categoryIds = [
      ...new Set(projectCategories.map((pc) => pc.category_id)),
    ];
    const categories = await fetchCategories(categoryIds);
    const dpgStatuses = await fetchDpgStatuses(projectIds);

    const projectsWithTagsAndStatusCount = mapProjectsWithTagsAndStatus(
      projects,
      projectCategories,
      categories,
      dpgStatuses
    );

    return json({ projects: projectsWithTagsAndStatusCount }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
