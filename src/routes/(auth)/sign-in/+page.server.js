import { fail } from "@sveltejs/kit";
import { z } from "zod";

const loginSchema = z.object({
	email: z.string({ required_error: "email is required" }).email(),
	password: z
		.string({ required_error: "password is required" })
		.min(4, { message: "password too short" }),
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());

		const { data, error, success } = loginSchema.safeParse(form);
		if (!success) {
			const errors = error.flatten().fieldErrors;
			const firstError = Object.values(errors).flat().at(0);
			fail(400, { error: firstError });
		}

		// TODO: do something with data
		console.log(data);
	},
};
