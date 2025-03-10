import { supabase } from "$lib/server/supabase.js";
import { error } from "@sveltejs/kit";

/** @type {import("./$types").LayoutServerLoad} */
export async function load({ fetch, locals }) {
	try {
		const response = await fetch("/api/me");
		const { user, error } = await response.json();

		if (!response.ok) {
			return error(404, { message: error });
		}

		return { user };
	} catch (_e) {
		return error(500, { message: _e.message });
	}

	const { data } = await supabase
		.from("project_resource")
		.select("project_id")
		.eq("user_id", locals?.authUser?.id);
	const { data: contributed } = await supabase
		.from("projects")
		.select("*")
		.in(
			"id",
			data.flatMap((d) => d.project_id),
		);

	try {
		const [projectsRes, bookmarksRes] = await Promise.all([
			fetch("/api/projects/user/projects"),
			fetch("/api/projects/user/bookmarks"),
		]);

		if (!projectsRes.ok || !bookmarksRes.ok) {
			return error(500, { message: "Failed to fetch projects or bookmarks" });
		}

		const [projectsData, bookmarksData] = await Promise.all([
			projectsRes.json(),
			bookmarksRes.json(),
		]);

		return {
			allProjects: projectsData.projects || [],
			bookmarks: bookmarksData.projects || [],
			contributed: [...projectsData.projects, ...contributed],
		};
	} catch (e) {
		return error(500, { message: `Failed to load data: ${e.message}` });
	}
}
