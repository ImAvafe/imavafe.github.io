<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	let { data } = $props();

	let sortedProjects = $derived.by(() => {
		let projects = data.projects;

		projects.sort((projectA, projectB) => {
			return (projectA?.priority || 1000) - (projectB?.priority || 1000);
		});

		return projects;
	});

	console.log(sortedProjects);
</script>

<div>
	<h1>Roles</h1>

	<div class="overflow-x-auto">
		<table class="table mt-0">
			<thead>
				<tr>
					<th></th>
					<th>Role</th>
					<th>Company</th>
					<th>Date</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th></th>
					<td>Principal Frontend Developer</td>
					<td>HD Admin</td>
					<td>Feb 2025 — Present</td>
				</tr>
				<tr>
					<th></th>
					<td>Founder</td>
					<td>Loneka</td>
					<td>Nov 2021 — Present</td>
				</tr>
			</tbody>
		</table>
	</div>

	<a href="/resume">See resume</a>

	<div class="divider"></div>

	<h1>Projects</h1>

	<section>
		<ul class="list-none p-0">
			{#each sortedProjects as project (project)}
				<li class="">
					<Article
						title={project.title}
						description={project.description}
						date={project.date}
						icon={project.icon}
						href={`/work/${project.slug}`}
					/>
				</li>
			{/each}
		</ul>
	</section>
</div>
