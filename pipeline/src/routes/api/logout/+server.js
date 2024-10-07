import { json } from '@sveltejs/kit';

export async function POST({ cookies }) {
    // Clear the cookies
    cookies.set('access_token', '', {
        path: '/',
        expires: new Date(0),
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });
    cookies.set('refresh_token', '', {
        path: '/',
        expires: new Date(0),
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    });

    return json({ success: true });
}
  