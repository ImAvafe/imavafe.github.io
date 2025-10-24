<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	let { data } = $props();
</script>

<div>
	<h1>Experience</h1>
	<a
		href="https://github.com/loneka/onyx-ui/releases/download/1.0.2/OnyxUI.rbxm"
		aria-label="Download resume"
		class="btn"
	>
		Download Resume
	</a>

	<div class="divider"></div>
	<h1>Projects</h1>
	<section>
		<ul class="list-none p-0">
			{#each data.projects as project (project.id)}
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
