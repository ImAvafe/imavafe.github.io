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
	description: string;
	type: string;
	role: string;
	date: string;
	icon: string;
	categories: Categories[];
	metrics: string[];
	priority: number;
	published: boolean;
};
