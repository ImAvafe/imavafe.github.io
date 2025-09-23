<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="w-full flex flex-col items-center">
	<div class="max-w-4xl px-4 py-6">
		{@render children?.()}
	</div>
</div>

