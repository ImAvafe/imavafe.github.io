<script lang="ts">
	import Article from '$lib/components/Article.svelte';

	let { data } = $props();
</script>

<div>
	<h1>Blog</h1>
	<p>Opinions are representative of my employer.</p>
	<section>
		<ul class="list-none p-0">
			{#each data.posts as post (post.slug)}
				{#if post.published == true}
					<li class="">
						<Article
							title={post.title}
							description={post.description}
							date={post.date}
							icon={post.icon}
							href={`/blog/${post.slug}`}
						/>
					</li>
				{/if}
			{/each}
		</ul>
	</section>
</div>
