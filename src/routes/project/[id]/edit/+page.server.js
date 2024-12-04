import { redirect, fail } from '@sveltejs/kit';
import { createProjectSchema } from '$lib/server/validator/projectSchema.js';
import { uploadImageAndReturnUrl } from '$lib/server/service/imageUploadService.js';

export async function load({ locals, params, fetch }) {
  let user = locals.authUser;
  let id = params.id;

  if (!user) {
    throw redirect(307, '/explore');
  }

  try {
    const response = await fetch(`/api/projects/singleProject/${id}`);
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    const project = data.project;

    return { project }; 
  } catch (error) {
    console.error('Failed to fetch project:', error);
    throw new Error('Failed to load project');
  }
}


export const actions = {
  default: async ({ request, locals, params, fetch }) => {
    let user = locals.authUser;
    let supabase = locals.supabase;
    let id = params.id;
    

    const { tags, banner_image, image, ...form } = Object.fromEntries(await request.formData());

    const { data, error: validationError, success } = createProjectSchema.safeParse(form);

    if (!success) {
      const errors = validationError.flatten().fieldErrors;
      const firstError = Object.values(errors).flat().at(0);
      fail(400, { error: firstError });
    }

    data.tags = tags;

    // if (banner_image.name) {
    //   data.banner_image = await uploadImageAndReturnUrl(banner_image, supabase);
    // }

    // if (image.name) {
    //   data.image = await uploadImageAndReturnUrl(image, supabase);
    // }


    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        fail(400, 'Failed to save project');
      }
    } catch (_) {
      fail(500, 'Failed to save project. Please try again later.');
    }

    //redirect to the project
    //redirect(307, '/profile');


  }
};