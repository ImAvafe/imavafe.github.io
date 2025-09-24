<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const navItems = [
		{
			label: '/',
			href: "/",
		},
		{
			label: "/blog",
			href: "blog",
		},
		{
			label: "/projects",
			href: "projects",
		}
	]
	const footerLinks = [
		{
			label: "GitHub",
			href: "/go/github",
		}
	]

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="w-full flex flex-col items-center">
	<div class="w-full max-w-4xl dark:outline-zinc-900 outline-2">
		<Navbar title="avafe.me" items={navItems} />
		<div class="px-4 py-6">
			{@render children?.()}
		</div>
		<Footer
			description = "Copyright © 2025 Avafe"
			links = {footerLinks}
		/>
	</div>
</div>

