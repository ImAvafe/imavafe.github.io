<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<div class="flex flex-row flex-wrap justify-between">
    <hgroup class="flex flex-col gap-2">
      <h1 class="mb-0">{data.meta.title}</h1>
      <p class="mt-0 font-semibold">{data.meta.date}</p>
    </hgroup>
    <img src={data.meta.icon} alt="Article icon." class="w-40 mt-0 mb-0 aspect-square">
  </div>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="prose">
		<data.content />
	</div>
</article>