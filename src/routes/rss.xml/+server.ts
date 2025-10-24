import type { Article } from '$lib/types';
import { generateRssFeed } from 'feedsmith';

export const prerender = true;

function postToItem(post) {
	console.log(post);

	return {
		title: post.title,
		description: post.description,
		pubDate: new Date(post.date),
		icon: post.icon,
		categories: post.categories.map((category) => {
			return { name: category };
		}),
		media: {
			thumbnails: [{ url: post.icon }]
		},
		link: `https://avafe.me/blog/${post.slug}`,
		guid: `https://avafe.me/blog/${post.slug}`
	};
}

export async function GET({ fetch }) {
	const response = await fetch('/api/posts');
	const posts: Article[] = await response.json();

	return new Response(
		generateRssFeed({
			title: `Avafe's Ramblings`,
			link: 'https://avafe.me',
			description: `Game developer, FOSS fanatic.`,
			language: 'en-US',
			items: posts.map((post) => {
				return postToItem(post);
			})
		})
	);
}
