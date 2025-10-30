<script lang="ts">
	export let title: string;
	export let description: string;
	export let date: string;
	export let icon: string;
	export let href: string;
	export let markers: string[];
</script>

<a {href} class="not-prose no-underline">
	<div
		class="card flex flex-row gap-6 p-4 outline-1 outline-neutral transition-colors hover:outline-primary"
	>
		<img src={icon} alt="Article icon." class="aspect-square w-36" />
		<article class="flex flex-col gap-2">
			<h1 class="mt-0 mb-0 text-2xl font-bold">{title}</h1>
			<p class="mt-0 mb-0">{description}</p>
			<ul class="flex flex-row gap-4">
				{#each markers as marker (marker)}
					<li><p class="font-semibold">{marker}</p></li>
				{/each}
			</ul>
		</article>
	</div>
</a>
