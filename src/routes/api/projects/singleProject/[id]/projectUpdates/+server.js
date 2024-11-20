import { supabase } from '$lib/server/supabase.js';
import { getProjectUpdates } from '$lib/server/service/projectUpdatesService.js';

import { json } from '@sveltejs/kit';

export async function GET({ params }) {
  const { id } = params;

  try {
    const projectUpdatesWithProfiles = await getProjectUpdates(id);

    return json({ projectUpdates: projectUpdatesWithProfiles }, { status: 200 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}
