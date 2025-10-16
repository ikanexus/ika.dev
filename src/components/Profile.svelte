<script>
import { onMount } from 'svelte';
import base from '../profiles/base.png';
import pestino from '../profiles/pestino.png';

const images = [base, pestino];
let currentIndex = 0;

onMount(() => {
	const interval = setInterval(() => {
		currentIndex = (currentIndex + 1) % images.length;
	}, 7500);
	return () => clearInterval(interval);
});
</script>

<div class="mx-auto relative h-64 w-64 my-8">
	{#each images as image, index}
		<img
			type="image"
			alt=""
			class={`absolute top-0 left-0 h-full w-full mask mask-circle bg-center bg-no-repeat ${
index === currentIndex ? 'opacity-100' : 'opacity-0'
}`}
			src={image.src}
		/>
	{/each}
</div>
