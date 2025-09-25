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
			label: "/links",
			href: "links",
		},
		{
			label: "/work",
			href: "work",
		},
		{
			label: "/blog",
			href: "blog",
		},
	]
	const footerLinks = [
		{
			label: "Source",
			href: "https://github.com/ImAvafe/imavafe.github.io",
		}
	]

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="w-full flex flex-col items-center">
	<div class="w-full max-w-4xl dark:outline-neutral outline-2">
		<Navbar title="avafe.me" items={navItems} />
		<div class="px-4 py-6">
			{@render children?.()}
		</div>
		<Footer
			description = "Copyleft 🄯 2025 Avafe"
			links = {footerLinks}
		/>
	</div>
</div>

