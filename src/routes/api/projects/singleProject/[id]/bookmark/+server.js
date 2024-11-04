import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function POST({ params, request }) {
    const { id: projectId } = params;
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
      const { data: userData, error: userError } = await supabase.auth.getUser(accessToken);
  
      if (userError) {
          return json({ error: userError.message }, { status: 401 });
      }
  
      let user = userData.user;

      try {
        const { data: existingBookmark, error: fetchError } = await supabase
            .from('bookmark_project')
            .select('*')
            .eq('user_id', user.id)
            .eq('project_id', projectId)
            .single();

        // if (fetchError && fetchError.code !== 'PGRST116') { 
        //     return json({ error: fetchError.message }, { status: 500 });
        // }

        if (existingBookmark) {
            // If the bookmark exists, delete it
            const { error: deleteError } = await supabase
                .from('bookmark_project')
                .delete()
                .eq('user_id', user.id)
                .eq('project_id', projectId);

            if (deleteError) {
                return json({ error: deleteError.message }, { status: 500 });
            }

            return json({ success: true, message: 'Bookmark removed' }, { status: 200 });
        } else {
            // If the bookmark doesn't exist, add it
            const { error: insertError } = await supabase
                .from('bookmark_project')
                .insert([{ user_id: user.id, project_id: projectId }]);

            if (insertError) {
                return json({ error: insertError.message }, { status: 500 });
            }

            return json({ success: true, message: 'Bookmark added' }, { status: 200 });
        }

      } catch (error) {
        return json({ erorr: error }, { status: 500 });
      }
  }