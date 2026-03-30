<script lang="ts">
	export let title: string;
	export let description: string;
	export let icon: string;
	export let href: string;
	export let markers: string[];
</script>

<a {href} class="not-prose no-underline">
	<div
		class="card flex flex-row gap-6 p-4 outline-1 outline-border transition-all hover:outline-2 hover:outline-primary"
	>
		<img
			src={icon}
			alt="Article icon."
			class="icon aspect-square max-h-24 max-w-24 sm:max-h-32 sm:max-w-32"
		/>
		<div class="flex flex-col flex-wrap gap-1">
			<span class="text-[22px] font-bold">{title}</span>
			<p class="flex-1 leading-6">{description}</p>
			<ul class="flex flex-row flex-wrap">
				{#each markers as marker, index (index)}
					<li class="inline-block"><p class="leading-4 font-medium">{marker}</p></li>
					{#if index < markers.length - 1}
						<span class="mr-2 ml-2 leading-4">&#8226;</span>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</a>

<style>
	.icon {
		--s: 25px; /* the size on the corner */
		--t: 1px; /* the thickness of the border */
		--g: 6px; /* the gap between the border and image */

		padding: calc(var(--g) + var(--t));
		outline: var(--t) solid var(--color-border); /* the color here */
		outline-offset: calc(-1 * var(--t));
		mask:
			conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s))
				calc(100% - var(--s)),
			conic-gradient(#000 0 0) content-box;
		transition: 0.4s;
	}
</style>
