import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function GET({ params }) {
  const { id, updateId } = params;

  try {
    const { data: comments, error: commentsError } = await supabase
      .from("project_update_comment")
      .select("*")
      .eq("project_id", id)
      .eq("update_id", updateId)
      .order("created_at", { ascending: false });

    if (commentsError) {
      return json({ error: commentsError.message }, { status: 500 });
    }

    if (!comments || comments.length === 0) {
      return json({ comments: [] }, { status: 200 });
    }

    const userIds = [...new Set(comments.map((comment) => comment.user_id))];

    const { data: profiles, error: profilesError } = await supabase
      .from("profile")
      .select("*")
      .in("user_id", userIds);

    if (profilesError) {
      return json({ error: profilesError.message }, { status: 500 });
    }

    const profilesByUserId = profiles.reduce((acc, profile) => {
      acc[profile.user_id] = profile;
      return acc;
    }, {});

    const commentsWithProfiles = comments.map((comment) => ({
      ...comment,
      userProfile: profilesByUserId[comment.user_id] || null,
    }));

    return json({ comments: commentsWithProfiles }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
