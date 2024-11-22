import { supabase } from '$lib/server/supabase.js';

export async function getMultipleProfiles(userIds) {
    const { data, error } = await supabase
    .from('profile')
      .select('*')
      .in('user_id', userIds);

    if (error) throw new Error(error.message);
    return data || [];
}

export async function getProfile(userId) {
    const { data, error } = await supabase
    .from('profile')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw new Error(error.message);
    return data || {};
}