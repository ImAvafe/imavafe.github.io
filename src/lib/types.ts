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

export type Project = {
	title: string;
	slug: string;
	tagline: string;
	date: string;
	icon: string;
	categories: Categories[];
	metrics: string[];
	published: boolean;
};
