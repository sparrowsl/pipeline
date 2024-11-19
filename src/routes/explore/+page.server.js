/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, url }) {
	const itemsPerPage = url.searchParams.get("limit") || 6;
	const currentPage = url.searchParams.get("page") || 1;

	async function fetchAllProjects() {
		try {
			const response = await fetch(
				`/api/projects/allprojects?page=${currentPage}&limit=${itemsPerPage}`,
			);
			if (!response.ok) {
				return [];
			}

			return await response.json();
		} catch (error) {
			// TODO: do something with the error
		}
	}

	async function fetchTopProjects() {
		try {
			const response = await fetch("/api/projects/allprojects?limit=3");
			if (!response.ok) {
				return [];
			}

			return await response.json();
		} catch (error) {
			// TODO: do something with the error
		}
	}

	// TODO: could be changed to `Promise.allSettled` in case one of the functions failed
	const [allProjects, topProjects] = await Promise.allSettled([
		fetchAllProjects(),
		fetchTopProjects(),
	]);

	return {
		allProjects,
		topProjects,
	};
}
