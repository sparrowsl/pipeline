import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ request, params }) {
   
    const projectId = params.id;

    try {
        const { data: project, error: projectError } = await supabase
            .from('projects')
            .select('*')
            .eq('id', projectId)
            .single();

        if (projectError) {
            return json({ error: projectError.message }, { status: 500 });
        }

        const { data: projectCategories, error: pivotError } = await supabase
            .from('category_project')  // Replace with actual pivot table name
            .select('category_id')
            .eq('project_id', projectId);

        if (pivotError) {
            return json({ error: pivotError.message }, { status: 500 });
        }

        
         const categoryIds = projectCategories.map(pc => pc.category_id);
         
         const { data: categories, error: categoriesError } = await supabase
             .from('categories')  
             .select('*')
             .in('id', categoryIds);

        if (categoriesError) {
            return json({ error: categoriesError.message }, { status: 500 });
        }

        const projectWithTags = {
            ...project,
            tags: categories
        };

        return json({ project: projectWithTags }, { status: 200 });

    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }

}