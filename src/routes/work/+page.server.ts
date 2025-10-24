import type { Article } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/projects');
	const projects: Article[] = await response.json();

	return { projects: projects };
}
