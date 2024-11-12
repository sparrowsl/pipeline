import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ params }) {
  const { id } = params;

  try {
    const { data: members, error: membersError } = await supabase
      .from('project_members')
      .select('*')
      .eq('project_id', id)
      .order('created_at', { ascending: false });

    if (membersError) {
      return json({ error: membersError.message }, { status: 500 });
    }

    // If no members, return early
    if (!members || members.length === 0) {
      return json({ members: [] }, { status: 200 });
    }

    // Extract unique user_ids from project members
    const userIds = [...new Set(members.map((member) => member.user_id))];

    // Fetch profiles that match the user_ids
    const { data: profiles, error: profilesError } = await supabase
      .from('profile')
      .select('*')
      .in('user_id', userIds);

    if (profilesError) {
      return json({ error: profilesError.message }, { status: 500 });
    }

    // Map profiles by user_id for easy lookup
    const profilesByUserId = profiles.reduce((acc, profile) => {
      acc[profile.user_id] = profile;
      return acc;
    }, {});

    // Attach the corresponding profile to each member
    const membersWithProfiles = members.map((member) => ({
      ...member,
      userProfile: profilesByUserId[member.user_id] || null,
    }));

    return json({ members: membersWithProfiles }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
