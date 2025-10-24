<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div>
	<Article
		title={data.meta.title}
		date={data.meta.date}
		icon={data.meta.icon}
		description={data.meta.description}
		href="#"
	/>

	<div class="divider divider-neutral"></div>

	<article>
		<data.content />
	</article>
</div>