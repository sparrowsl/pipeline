import { getAllCategories } from '../repo/categoryRepo.js';

export async function allCategories() {
  const categories = await getAllCategories();

  return categories;
}
