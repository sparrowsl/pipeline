import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
  const { id } = params;

  try {
    const { data: resources, error: resourcesError } = await supabase
      .from("project_resource")
      .select("*")
      .eq("project_id", id)
      .order("created_at", { ascending: false });

    if (resourcesError) {
      throw resourcesError;
    }

    const userIds = [...new Set(resources.map((resource) => resource.user_id))];

    const { data: profiles, error: profilesError } = await supabase
      .from("profile")
      .select("*")
      .in("user_id", userIds);

    if (profilesError) {
      throw profilesError;
    }

    const profilesByUserId = profiles.reduce((acc, profile) => {
      acc[profile.user_id] = profile;
      return acc;
    }, {});

    const resourcesWithProfiles = resources.map((resource) => ({
      ...resource,
      user_profile: profilesByUserId[resource.user_id] || null, // Add profile or null if not found
    }));

    return json({ resources: resourcesWithProfiles }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
