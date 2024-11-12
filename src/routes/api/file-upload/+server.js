//@ts-check
import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  const formData = await request.formData();

  const file = formData.get('file');

  if (!file) {
    return json({ error: 'No file provided' }, { status: 400 });
  }

  const { data, error } = await supabase.storage
    .from('pipeline-images')
    .upload(`uploads/${file.name}`, file);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  const { data: imgData } = await supabase.storage
    .from('pipeline-images')
    .getPublicUrl(`uploads/${file.name}`);

  return json({ url: imgData.publicUrl });
}
