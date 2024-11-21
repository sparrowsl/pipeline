import { supabase, adminAuthClient } from '$lib/server/supabase.js';
import { json, redirect } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const { email, password, name } = await request.json();

    const { data: signUpData, error: signUpError } = await adminAuthClient.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        name,
      },
    });


    if (signUpError) {
      return json({ error: signUpError.message }, { status: 400 });
    }

    const { data: userData, error: profileError } = await supabase
      .from('profile')
      .insert([{ user_id: signUpData.user.id, name: name }])

    if (profileError) {
      return json({ error: profileError.message }, { status: 500 });
    }

    return json({ success: true, redirectTo: '/explore' }, { status: 200, headers });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to sign up' }), {
      status: 500,
    });
  }
}
