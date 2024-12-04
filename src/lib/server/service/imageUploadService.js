import { uploadImage } from "../repo/imageUploadRepo.js";

export async function uploadImageAndReturnUrl(file, supabase) {
    const url = await uploadImage(file, supabase);
    return url;
}