<script>
  import { fade } from 'svelte/transition';
  import { typewriter } from '@svelteuidev/motion';

  let visible = false;

</script>

<h1 class="text-4xl mx-auto pb-8" on:mouseenter={() => visible = true} on:mouseleave={() => visible = false}>
  Ika{#key visible}<span in:typewriter={{}} out:fade class={visible ? '' : 'hidden'}>Nexus</span
  >{/key}
</h1>

