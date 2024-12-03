import { uploadImage } from "../repo/imageUploadRepo.js";

export async function uploadImageAndReturnUrl(file) {
    const url = await uploadImage(file);
    return url;
}