<script lang="ts">
	export let description: string = 'lorem ipsum';
	export let links: {
		label: string;
		href: string;
	}[] = [];
</script>

<div class="px-4 py-4 outline-1 dark:outline-neutral">
	<div class="flex w-full flex-wrap justify-between">
		<p class="mt-0 mb-0">{description}</p>
		<ul class="mt-0 mb-0 flex list-none flex-row flex-wrap px-0">
			{#each links as link}
				<li class="mt-0 mb-0 p-0">
					<a href={link.href} class="semibold font-mono">{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
