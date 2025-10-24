export type Categories = 'sveltekit' | 'svelte';

export type Article = {
	title: string;
	slug: string;
	description: string;
	date: string;
	icon: string;
	categories: Categories[];
	published: boolean;
};
