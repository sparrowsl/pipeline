import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
  const { id } = params;

  try {
    const { data: projectUpdates, error: updatesError } = await supabase
      .from("project_updates")
      .select("*")
      .eq("project_id", id)
      .order("created_at", { ascending: false });

    if (updatesError) {
      return json({ error: updatesError.message }, { status: 500 });
    }

    // If no project updates, return early
    if (!projectUpdates || projectUpdates.length === 0) {
      return json({ projectUpdates: [] }, { status: 200 });
    }

    // Extract unique user_ids from project updates
    const userIds = [
      ...new Set(projectUpdates.map((update) => update.user_id)),
    ];

    // Fetch profiles that match the user_ids
    const { data: profiles, error: profilesError } = await supabase
      .from("profile")
      .select("*")
      .in("user_id", userIds);

    if (profilesError) {
      return json({ error: profilesError.message }, { status: 500 });
    }

    // Map profiles by user_id for easy lookup
    const profilesByUserId = profiles.reduce((acc, profile) => {
      acc[profile.user_id] = profile;
      return acc;
    }, {});

    // Attach the corresponding profile to each project update
    const projectUpdatesWithProfiles = projectUpdates.map((update) => ({
      ...update,
      userProfile: profilesByUserId[update.user_id] || null,
    }));

    return json(
      { projectUpdates: projectUpdatesWithProfiles },
      { status: 200 }
    );
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
