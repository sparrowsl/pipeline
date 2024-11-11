import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
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
    const {
      title,
      bio,
      tags,
      country,
      details,
      email,
      portfolio,
      github,
      linkedin,
      twitter,
      website,
      other,
      bank_acct,
      wallet_address,
      funding_goal,
      bannerImage,
      profileImage,
    } = await request.json();

    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          user_id: user.id,
          title,
          bio,
          country,
          details,
          email,
          portfolio,
          github_repo: github,
          linkedin,
          twitter,
          website,
          other,
          bank_acct,
          wallet_address,
          funding_goal,
          image: profileImage,
          banner_image: bannerImage,
        },
      ])
      .select();

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    //create team member
    const { data: teamData, error: teamError } = await supabase
      .from("project_members")
      .insert([
        {
          user_id: user.id,
          project_id: data[0].id,
          creator_id: user.id,
        },
      ])
      .select();

    if (teamError) {
      return json({ error: teamError.message }, { status: 400 });
    }

    //create project category
    for (const tag of tags) {
      const { data: categoryData, error: categoryError } = await supabase
        .from("category_project")
        .insert([
          {
            project_id: data[0].id,
            category_id: tag.id,
          },
        ])
        .select();

      if (categoryError) {
        return json({ error: categoryError.message }, { status: 400 });
      }
    }

    return json({ success: true }, { status: 200 });
  } catch (error) {
    return json({ erorr: 'Something went wrong' }, { status: 500 });
  }
}
