import { supabase } from "$lib/server/supabase.js";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  try {
    const { email, password } = await request.json();

    console.log("email:", email, "password:", password);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return json({ error: error.message }, { status: 400 });
    }

    if (data && data.session) {
      const headers = new Headers();
      headers.append(
        "Set-Cookie",
        `access_token=${data.session.access_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`
      );
      headers.append(
        "Set-Cookie",
        `refresh_token=${data.session.refresh_token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`
      );

      // Return the response with headers
      return json(
        { success: true, redirectTo: "/explore" },
        { status: 200, headers }
      );
    }

    return json({ error: "No session data returned" }, { status: 400 });
  } catch (err) {
    console.error("Server error during sign-in:", err);
    return json({ error: "Failed to sign in" }, { status: 500 });
  }
}
