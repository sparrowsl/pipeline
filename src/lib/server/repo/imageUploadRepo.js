// import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';
export async function uploadImage(file, supabase) {
  const timestamp = Date.now();
  const originalFileName = file.name;
  const fileExtension = originalFileName.split('.').pop();
  const fileNameWithoutExtension =
    originalFileName.substring(0, originalFileName.lastIndexOf('.')) || originalFileName;
  const newFileName = `${fileNameWithoutExtension}-${timestamp}.${fileExtension}`;

  const { data, error } = await supabase.storage
    .from('pipeline-images')
    .upload(`uploads/${newFileName}`, file);

  if (error) {
    return json({ error: error.message }, { status: 500 });
  }

  const { data: imgData } = await supabase.storage
    .from('pipeline-images')
    .getPublicUrl(`uploads/${newFileName}`);

  return imgData.publicUrl;
}

// export async function getImageUrl(fileName) {
//   const { data, error } = await supabase.storage
//     .from('pipeline-images')
//     .getPublicUrl(`uploads/${fileName}`);
//   return data.publicUrl;
// }
