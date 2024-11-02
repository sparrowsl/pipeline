import { supabase } from '$lib/server/supabase.js'; // Import your Supabase client

export async function GET({ request }) {
    const cookies = request.headers.get('cookie');
  
    if (!cookies) {
      return new Response(JSON.stringify({ error: 'No cookies found' }), { status: 401 });
    }
  
    // Parse cookies to extract the access token
    const accessToken = cookies
      .split(';')
      .find((cookie) => cookie.trim().startsWith('access_token='))
      ?.split('=')[1];
  
    if (!accessToken) {
      return new Response(JSON.stringify({ error: 'No access token found' }), { status: 401 });
    }
  
    // Get user data from Supabase using the access token
    const { data, error } = await supabase.auth.getUser(accessToken);

    //console.log('data:', data.user);

    // Get User Profile from Supabase
    const { data: profileData, error: profileError } = await supabase
      .from('profile')
      .select('*')
      .eq('user_id', data.user.id)
      .single();
  
      //console.log('profileData:', profileData);
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 401 });
    }
  
    
    if (!data || !data.user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }
  
   
    const user = {
        'id': data.user.id,
        'email': data.user.email,
        'display_name': profileData.name,
        'bio': profileData.bio,
        'interests': profileData.interests,
        'skills': profileData.skills,
        'image_url': profileData.image,
        'points': profileData.points
       
    }
  
    return new Response(JSON.stringify({ user }), { status: 200 });
}
