
export async function load({ fetch }) {
    // const cookies = request.headers.get('cookie');
    // const accessToken = cookies
    //   ?.split(';')
    //   .find((cookie) => cookie.trim().startsWith('access_token='))
    //   ?.split('=')[1];
  
    // return {
    //   isAuthenticated: !!accessToken
    // };
    let user = null;
    let error = null;

    try {
        const response = await fetch('/api/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const result = await response.json();
            user = result.user;
        } else {
            const result = await response.json();
            error = result.error;
        }
    } catch (err) {
        error = 'Failed to fetch user data';
    }

    return {
        isAuthenticated: !!user,
        user,
        error
    };
}