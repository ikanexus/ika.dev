<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	/** @type {string[]} images to use */
	export let images;
	let numImages = images.length;
	let currentIndex = -1;
	const nextImage = () => {
		if (currentIndex++ >= numImages - 1) {
			currentIndex = 0;
		}
		return `/profiles/${images[currentIndex]}`;
	};

	let image = nextImage();

	if (numImages != 0 && numImages > 1) {
		onMount(() => {
			const interval = setInterval(() => {
				image = nextImage();
			}, 10000);

			return () => {
				clearInterval(interval);
			};
		});
	}
</script>

<figure class="h-74">
	<div class="my-8 w-64 h-64 relative mx-auto">
		{#key image}
			<img
				transition:fade
				class="mask w-64 h-64 mask-circle absolute top-0"
				src={image}
				alt="IkaNexus"
			/>
		{/key}
	</div>
</figure>
