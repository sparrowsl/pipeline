import { supabase } from '$lib/server/supabase.js';

export async function getAuthUser(accessToken) {
  const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);

  return userData;
}
