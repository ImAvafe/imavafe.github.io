<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import Metrics from '$lib/components/Metrics.svelte';

	let { data } = $props();

	let sortedProjects = $derived.by(() => {
		let projects = data.projects;

		projects.sort((projectA, projectB) => {
			return (projectA?.priority || 1000) - (projectB?.priority || 1000);
		});

		return projects;
	});
</script>

<svelte:head>
	<title>Work - Avafe</title>
</svelte:head>

<div>
	<div class="outline-1 outline-neutral outline-dashed">
		<Metrics />

		<div class="overflow-x-auto p-6 pb-0">
			<table class="table mt-0">
				<thead>
					<tr>
						<th>Role</th>
						<th>Company</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b-neutral">
						<td>Software Engineer</td>
						<td>HD Admin</td>
						<td>Feb 2025 — Jan 2026</td>
					</tr>
					<tr class="border-b-neutral">
						<td>Founder</td>
						<td>Loneka</td>
						<td>Nov 2022 — Present</td>
					</tr>
					<tr class="border-b-neutral">
						<td>Game Developer</td>
						<td>Self-employed</td>
						<td>Mar 2020 — Present</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>

	<br />

	<a href="/avafe-resume.pdf" aria-label="Resume" class="btn w-full btn-lg">See Resume</a>

	<div class="divider"></div>

	<h1>Work</h1>

	<p>Ranked by favoritism.</p>

	<section>
		<ul class="flex list-none flex-col gap-2 p-0">
			{#each sortedProjects as project (project)}
				<li class="">
					<Article
						title={project.title}
						description={project.description}
						date={project.date}
						icon={project.icon}
						href={`/work/${project.slug}`}
						markers={[
							project.type,
							new Date(project.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short'
							}),
							project.keyMetric
						]}
					/>
				</li>
			{/each}
		</ul>
	</section>
</div>
