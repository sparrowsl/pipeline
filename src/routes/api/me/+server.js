import { getProfile } from '$lib/server/repo/userProfileRepo.js';
import { json } from '@sveltejs/kit';

export async function GET({ locals: { authUser, supabase }, setHeaders }) {
  const profile = await getProfile(authUser.id, supabase);

  const user = {
    id: authUser.id,
    email: authUser.email,
    display_name: profile.name,
    image_url: profile.image,
    banner_url: profile.banner,
    website: profile.web,
    ...profile,
  };

  setHeaders({
    'Cache-Control': 'public, max-age=600, stale-while-revalidate=300',
    Vary: 'Accept-Encoding',
  });

  return json({ user }, { status: 200 });
}
