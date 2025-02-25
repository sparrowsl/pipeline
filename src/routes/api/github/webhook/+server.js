//@ts-check

import { json } from '@sveltejs/kit';
import { githubWebhook } from '$lib/server/service/githubWebhookService.js';

// @ts-ignore
export async function POST({ request, locals }) {
  const body = await request.json();
  // @ts-ignore
  let supabase = locals.supabase;

  if (body.action === 'closed' && body.pull_request?.merged === true) {
    await githubWebhook(body, supabase);
  } else {
    console.log(
      `The action is "${body.action}" or the pull request was not merged. No specific handler for this case.`,
    );
  }

  return json({ success: 'true' }, { status: 200 });
}
