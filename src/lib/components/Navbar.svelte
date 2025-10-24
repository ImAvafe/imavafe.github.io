<script lang="ts">
	import { page } from '$app/stores';

	export let title: string = 'Title';
	export let items: {
		label: string;
		href: string;
	}[] = [];
</script>

<div class="navbar bg-base-100 px-4 outline-1 outline-neutral">
	<div class="flex w-full flex-wrap justify-between gap-2">
		<a href="/" class="my-0 text-3xl font-bold text-primary no-underline">{title}</a>
		<ul class="mt-0 mb-0 flex list-none flex-row flex-wrap gap-2 px-0">
			{#each items as item}
				<li class="mt-0 mb-0 p-0">
					<a href={item.href} class="btn font-mono font-semibold">{item.label}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
