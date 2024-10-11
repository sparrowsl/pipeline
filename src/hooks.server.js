import { redirect } from '@sveltejs/kit';

const PROTECTED_ROUTES = ['/explore', '/profile', '/createProject', '']; // Add your protected routes here
const PUBLIC_ROUTES = ['/signUp', '/signIn'];

export async function handle({ event, resolve }) {
    const cookies = event.request.headers.get('cookie');
    const accessToken = cookies
      ?.split(';')
      .find((cookie) => cookie.trim().startsWith('access_token='))
      ?.split('=')[1];
  
    const path = event.url.pathname;
    
  
    if (PROTECTED_ROUTES.includes(path) && !accessToken) {
      throw redirect(302, '/signIn');
    }
  
    if (PUBLIC_ROUTES.includes(path) && accessToken) {
      throw redirect(302, '/explore');
    }
    
  
    return resolve(event);
  }
  