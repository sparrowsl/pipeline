import { redirect } from '@sveltejs/kit';
export async function load(locals) {
  let user = locals.authUser;

  if (!user) {
    throw redirect(302, '/explore');
  }
}
