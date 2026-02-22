<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	let searchQuery = `from:avafe.me ${data.meta.title}`;
	const styleString =
		"section article { border-bottom-width: 0px !important; padding-left: 0px !important; padding-right: 0px !important; }\np { font-size: 0.875em }\nsection img[alt='profile picture'] { width: 44px !important; height: 44px !important }";

	onMount(async () => {
		await import('bsky-embed/dist/bsky-embed.es.js');
	});
</script>

<svelte:head>
	<title>{data.meta.title} - Avafe</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
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
				(data.meta.categories || []).toString().replaceAll(',', ', ')
			]}
		/>

		{#if data.meta.metrics}
			<div class="stats flex flex-col outline-1 outline-neutral sm:flex-row">
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

	<br />

	<div class="divider"></div>

	<br />

	<bsky-embed search={searchQuery} disable-autoplay="true" custom-styles={styleString}></bsky-embed>
</div>
