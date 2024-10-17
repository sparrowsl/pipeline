//@ts-check
import { env } from '$env/dynamic/private';

export const OPENAI_API_KEY = env.PRIVATE_OPENAI_API_KEY;
export const GITHUB_TOKEN = env.PRIVATE_GITHUB_TOKEN;
