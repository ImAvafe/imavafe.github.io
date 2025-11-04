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
	<Article
		title={data.meta.title}
		icon={data.meta.icon}
		description={data.meta.description}
		href="#"
		markers={[
			new Date(data.meta.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'short'
			}),
			(data.meta.categories || []).toString().replaceAll(',', ', ')
		]}
	/>

	<div class="divider divider-neutral"></div>

	<article>
		<data.content />
	</article>
</div>
