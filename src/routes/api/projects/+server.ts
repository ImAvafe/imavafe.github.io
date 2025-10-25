import type { Project } from '$lib/types';
import { json } from '@sveltejs/kit';

export const prerender = true;

async function getProjects() {
	let projects: Project[] = [];

	const paths = import.meta.glob('/src/projects/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const project = { ...metadata, slug } satisfies Project;

			projects.push(project);
		}
	}

	projects = projects.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return projects;
}

export async function GET() {
	const projects = await getProjects();

	return json(projects);
}
