import { storeComment, getComments } from '../repo/projectUpdateCommentRepo.js';
import { getMultipleProfiles } from '../repo/userProfileRepo.js';

export async function getUpdateComment(id, projectId) {
  const comments = await getComments(id, projectId);

  const userIds = comments.map((comment) => comment.user_id);

  const profiles = await getMultipleProfiles(userIds);

  const profilesByUserId = profiles.reduce((acc, profile) => {
    acc[profile.user_id] = profile;
    return acc;
  }, {});

  const commentsWithProfiles = comments.map((comment) => ({
    ...comment,
    userProfile: profilesByUserId[comment.user_id] || null,
  }));

  return commentsWithProfiles;
}

export async function storeProjectUpdateComment(commentData) {
  const comment = await storeComment(commentData);
  return comment;
}
