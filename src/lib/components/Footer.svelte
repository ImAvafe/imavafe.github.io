<script lang="ts">
	export let description: string = 'lorem ipsum';
	export let links: {
		label: string;
		href: string;
	}[] = [];
</script>

<div class="px-4 py-4 outline-1 outline-neutral">
	<div class="flex w-full flex-wrap justify-between">
		<span class="flex flex-row gap-2"
			><p class="mt-0 mb-0">{description}</p>
			<img src="/img/blahaj.gif" alt="Blahaj" class="mt-0 mb-0 w-8" /></span
		>
		<ul class="mt-0 mb-0 flex list-none flex-row flex-wrap px-0">
			{#each links as link}
				<li class="mt-0 mb-0 p-0">
					<a href={link.href} class="semibold font-mono">{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
