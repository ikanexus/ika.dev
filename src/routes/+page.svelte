<script>
	import { fade } from 'svelte/transition';
	import Icon, { getIcon, loadIcons } from '@iconify/svelte';
	import { typewriter } from '@svelteuidev/motion';
	import Figure from '../components/Figure.svelte';
	const links = [
		{
			name: 'GitHub',
			href: 'https://github.com/ikanexus',
			icon: 'mdi:github'
		}
	];
	loadIcons(links.flatMap((link) => link.icon))
	
	const images = ['base.png', 'pestino.png'];
	let visible = false;

	const showName = () => {
		visible = true;
	};

	const hideName = () => {
		visible = false;
	};
</script>

<Figure {images} />
<h1 class="text-4xl mx-auto pb-8" on:mouseenter={showName} on:mouseleave={hideName}>
	Ika{#key visible}<span in:typewriter={{}} out:fade class={visible ? '' : 'hidden'}>Nexus</span
		>{/key}
</h1>
<ul>
	{#each links as link}
		<li class="p-2">
			<a href={link.href} class="btn btn-outline btn-lg btn-block">
				<Icon icon={link.icon} />
				{link.name}
			</a>
		</li>
	{/each}
</ul>
