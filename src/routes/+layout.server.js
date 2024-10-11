export async function load({ request }) {
    const cookies = request.headers.get('cookie');
    const accessToken = cookies
      ?.split(';')
      .find((cookie) => cookie.trim().startsWith('access_token='))
      ?.split('=')[1];
  
    return {
      isAuthenticated: !!accessToken
    };
  }