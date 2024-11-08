import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function POST({ params, request }) {
  const { id, updateId } = params;
  const { body } = await request.json();

  const cookies = request.headers.get("cookie");

  if (!cookies) {
    return new Response(JSON.stringify({ error: "No cookies found" }), {
      status: 401,
    });
  }

  // Parse cookies to extract the access token
  const accessToken = cookies
    .split(";")
    .find((cookie) => cookie.trim().startsWith("access_token="))
    ?.split("=")[1];

  if (!accessToken) {
    return new Response(JSON.stringify({ error: "No access token found" }), {
      status: 401,
    });
  }

  // Get user data from Supabase using the access token
  const { data: userData, error: userError } =
    await supabase.auth.getUser(accessToken);

  if (userError) {
    return json({ error: userError.message }, { status: 401 });
  }

  let user = userData.user;

  try {
    const { data, error } = await supabase
      .from("project_update_comment")
      .insert([
        {
          project_id: id,
          update_id: updateId,
          body,
          user_id: user.id,
        },
      ])
      .select();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    return json({ success: true }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
