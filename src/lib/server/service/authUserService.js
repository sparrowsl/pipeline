import { getAuthUser } from "../repo/authUserRepo.js";

export async function getUser(token){
    const user = getAuthUser(token);
    return user;
}