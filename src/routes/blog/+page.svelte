<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog - Avafe</title>
</svelte:head>

<div>
	<h1>Blog</h1>

	<p>
		Opinions are representative of my employer.<br /><i>Unless I'm not currently self-employed*</i>
	</p>

	<p>
		Subscribe via
		<a href="https://avafe.substack.com/subscribe">Email</a>, <a href="/rss.xml">RSS</a>, or follow
		me <a href="/links">elsewhere</a>.
	</p>

	<section>
		<ul class="flex list-none flex-col gap-2 p-0">
			{#each data.posts as post (post.slug)}
				{#if post.published == true}
					<li class="">
						<Article
							title={post.title}
							description={post.description}
							icon={post.icon}
							href={`/blog/${post.slug}`}
							markers={[
								new Date(post.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: 'numeric'
								}),
								(post.categories || []).toString().replaceAll(',', ', ')
							]}
						/>
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</div>
