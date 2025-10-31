<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string;
	export let href: string;
	export let markers: string[];
</script>

<a {href} class="not-prose no-underline">
	<div
		class="card flex flex-row gap-6 p-4 outline-1 outline-neutral transition-colors hover:outline-primary"
	>
		<img src={icon} alt="Article icon." class="icon aspect-square w-36" />
		<article class="flex flex-col gap-2">
			<h1 class="mt-0 mb-0 text-2xl font-bold">{title}</h1>
			<p class="mt-0 mb-0 flex-1">{description}</p>
			<ul class="flex flex-row">
				{#each markers as marker, index (index)}
					<li class="inline-block"><p class="font-semibold">{marker}</p></li>
					{#if index < markers.length - 1}
						<span class="mr-2 ml-2">&#8226;</span>
					{/if}
				{/each}
			</ul>
		</article>
	</div>
</a>

<style>
	.icon {
		--s: 25px; /* the size on the corner */
		--t: 1px; /* the thickness of the border */
		--g: 6px; /* the gap between the border and image */

		padding: calc(var(--g) + var(--t));
		outline: var(--t) solid var(--color-neutral); /* the color here */
		outline-offset: calc(-1 * var(--t));
		mask:
			conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s))
				calc(100% - var(--s)),
			conic-gradient(#000 0 0) content-box;
		transition: 0.4s;
	}
</style>
