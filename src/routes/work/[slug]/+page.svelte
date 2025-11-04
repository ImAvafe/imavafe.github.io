<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Avafe</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div>
	<div class="flex flex-col gap-1">
		<Article
			title={data.meta.title}
			icon={data.meta.icon}
			description={data.meta.description}
			href="#"
			markers={[
				data.meta.type,
				new Date(data.meta.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'short'
				}),
				data.meta.role,
				data.meta.categories.toString().replaceAll(',', ', ')
			]}
		/>

		{#if data.meta.metrics}
			<div class="stats w-full outline-1 outline-neutral">
				{#each data.meta.metrics as metric (metric)}
					<div class="stat place-items-center">
						<div class="stat-title">{metric.name}</div>
						<div class="stat-value">{metric.value}</div>
						<div class="stat-desc">{metric.clarifier}</div>
					</div>
				{/each}
			</div>
		{/if}

		{#if data.meta.href}
			<div class="w-full outline-1 outline-neutral">
				<a href={data.meta.href} target="_blank" class="btn w-full btn-lg">Open Site</a>
			</div>
		{/if}
	</div>

	<div class="divider divider-neutral"></div>

	<article>
		<data.content />
	</article>
</div>
