import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function GET({ request }) {

    try {
        const { data: projects, error: projectsError } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false });

        if (projectsError) {
            return json({ error: projectsError.message }, { status: 500 });
        }

        if (!projects || projects.length === 0) {
            return json({ projects: [] }, { status: 200 });
        }

        // Extract unique project_ids from projects
        const projectIds = projects.map(project => project.id);


        const { data: projectCategories, error: pivotError } = await supabase
            .from('category_project')  
            .select('project_id, category_id')
            .in('project_id', projectIds);

        if (pivotError) {
            return json({ error: pivotError.message }, { status: 500 });
        }

        //get the categories for each project
        const categoryIds = [...new Set(projectCategories.map(pc => pc.category_id))];
        const { data: categories, error: categoriesError } = await supabase
            .from('categories')  
            .select('*')
            .in('id', categoryIds);


        if (categoriesError) {
            return json({ error: categoriesError.message }, { status: 500 });
        }

        const categoriesById = categories.reduce((acc, category) => {
            acc[category.id] = category;
            return acc;
        }, {});

        //Attach categories to each project
        const projectsWithTags = projects.map(project => {
            // Find the category IDs associated with this project
            const tagsForProject = projectCategories
                .filter(pc => pc.project_id === project.id)
                .map(pc => categoriesById[pc.category_id]);

            return {
                ...project,
                tags: tagsForProject.filter(Boolean) // Filter out any null values
            };
        });

        return json({ projects: projectsWithTags }, { status: 200 });

    } catch (error) {
        return json({ error: error.message }, { status: 500 });
    }
}