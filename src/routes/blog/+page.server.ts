import type { Article } from '$lib/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts: Article[] = await response.json();
	return { posts };
}
