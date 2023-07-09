<script>
	const links = [
		{
			name: 'GitHub',
			href: 'https://github.com/ikanexus'
		}
	];
</script>

<figure class="p-8">
	<img class="mask w-64 mask-circle mx-auto" src="/profile.png" alt="IkaNexus" />
</figure>
<h1 class="text-4xl pb-8">Ika</h1>
<ul>
{#each links as link}
  <li class="p-2">
    <a href={link.href} class="btn btn-outline btn-lg btn-block">{link.name}</a>
  </li>
{/each}
</ul>
