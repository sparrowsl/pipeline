import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  getProjectExistingCategories,
  getProjectsByUserId,
} from '$lib/server/repo/projectRepo';
import { createTeamMember } from '$lib/server/repo/memberRepo';
import {
  assignCategory,
  getCategories,
  getProjectCategories,
  addTags,
  removeTags,
} from '$lib/server/repo/categoryRepo';
import { projectSchema } from '../validator/projectSchema.js';
import { getDpgStatuses } from '../repo/dpgStatusRepo.js';

export async function getProjectsWithDetails(term, page, limit) {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const projects = await getProjects(term, start, end);

  if (projects.length === 0) {
    return [];
  }

  const projectIds = projects.map((project) => project.id);

  //additional data
  const projectCategories = await getProjectCategories(projectIds);
  const categories = await getCategories(projectCategories.map((pc) => pc.category_id));
  const dpgStatuses = await getDpgStatuses(projectIds);

  return mapProjectsWithTagsAndStatus(projects, projectCategories, categories, dpgStatuses);
}

export async function getUserProjects(userId, page, limit) {
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const projects = await getProjectsByUserId(userId, start, end);

  if (projects.length === 0) {
    return [];
  }

  const projectIds = projects.map((project) => project.id);

  //additional data
  const projectCategories = await getProjectCategories(projectIds);
  const categoriesIds = await getCategories(projectCategories.map((pc) => pc.category_id));
  const dpgStatuses = await getDpgStatuses(projectIds);

  return mapProjectsWithTagsAndStatus(projects, projectCategories, categoriesIds, dpgStatuses);
}

export async function getProjectWithDetails(id) {}

export async function storeProject(user, projectData) {
  //const validatedData = projectSchema.parse(projectData);

  const { tags, ...projectFields } = projectData;

  const project = await createProject({ ...projectFields, user_id: user.id });

  const teamMember = await createTeamMember(user.id, project.id);

  for (const tag of tags) {
    await assignCategory({ project_id: project.id, category_id: tag.id });
  }

  return { project, teamMember };
}

export async function updateProject(userId, projectId, projectData, tags) {
  await updateProject(projectId, { ...projectData, user_id: userId });

  const existingTags = await getProjectExistingCategories(projectId);
  const existingTagIds = existingTags.map((tag) => tag.category_id);
  const newTagIds = tags.map((tag) => tag.id);

  // Remove tags that are no longer in the new list
  const tagsToRemove = existingTagIds.filter((tagId) => !newTagIds.includes(tagId));
  const tagsToAdd = newTagIds.filter((tagId) => !existingTagIds.includes(tagId));

  // Remove old tags
  if (tagsToRemove.length > 0) {
    await removeTags(projectId, tagsToRemove);
  }

  // Add new tags
  if (tagsToAdd.length > 0) {
    await addTags(projectId, tagsToAdd);
  }

  return { success: true };
}

export async function deleteProject(id) {}

//helpers
function mapProjectsWithTagsAndStatus(projects, projectCategories, categories, dpgStatuses) {
  const categoriesById = categories.reduce((acc, category) => {
    acc[category.id] = category;
    return acc;
  }, {});

  const dpgStatusCountByProject = dpgStatuses.reduce((acc, status) => {
    acc[status.project_id] = (acc[status.project_id] || 0) + 1;
    return acc;
  }, {});

  return projects.map((project) => {
    const tagsForProject = projectCategories
      .filter((pc) => pc.project_id === project.id)
      .map((pc) => categoriesById[pc.category_id]);

    return {
      ...project,
      tags: tagsForProject.filter(Boolean),
      dpgStatusCount: dpgStatusCountByProject[project.id] || '',
    };
  });
}

//on more function
