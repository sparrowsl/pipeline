import { z } from "zod";

const signupSchema = z.object({
	name: z
		.string({ required_error: "name is required" })
		.trim()
		.min(2, { message: "name is too short" }),
	email: z.string({ required_error: "email is required" }).email(),
	password: z
		.string({ required_error: "password is required" })
		.min(4, { message: "password is too short" }),
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());

		const { data, error, success } = signupSchema.safeParse(form);
		if (!success) {
			const errors = error.flatten().fieldErrors;
			const firstError = Object.values(errors).flat().at(0);
			fail(400, { error: firstError });
		}

		// TODO: do something with data
		console.log(data);
	},
};
