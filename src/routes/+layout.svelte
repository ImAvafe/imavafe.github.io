<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const navItems = [
		{
			label: '/',
			href: '/'
		},
		{
			label: '/work',
			href: '/work'
		},
		{
			label: '/blog',
			href: '/blog'
		},
		{
			label: '/links',
			href: '/links'
		}
	];
	const footerLinks = [
		{
			label: 'Source',
			href: 'https://github.com/ImAvafe/imavafe.github.io'
		}
	];

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex w-full flex-col items-center">
	<div class="w-full max-w-4xl outline-1 outline-neutral">
		<Navbar title="avafe.me" items={navItems} />
		<div class="px-8 py-4">
			{@render children?.()}
		</div>
		<Footer description="Copyleft 🄯 2025 Avafe" links={footerLinks} />
	</div>
</div>
