<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID;
	export let images;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery columns-2 gap-4 md:columns-3" id={galleryID}>
	{#each images as image (image)}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
			class="mb-4 block break-inside-avoid align-top"
		>
			<img
				src={image.thumbnailURL}
				alt=""
				class="mt-0 mb-0 h-auto w-full cursor-pointer rounded-lg"
			/>
		</a>
	{/each}
</div>
