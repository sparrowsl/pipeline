import { supabase } from "$lib/server/supabase.js";
import { json, redirect } from "@sveltejs/kit";

export async function POST({ request }) {
  try {
    const { email, password, name } = await request.json();

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:5173/signIn",
        },
      }
    );

    if (signUpError) {
      return json({ error: signUpError.message }, { status: 400 });
    }

    const { data: userData, error: profileError } = await supabase
      .from("profiles")
      .insert([{ user_id: signUpData.user.id, name: name }]);

    if (profileError) {
      return json({ error: profileError.message }, { status: 500 });
    }

    throw redirect(303, "/waiting-confirmation");
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to sign up" }), {
      status: 500,
    });
  }
}
