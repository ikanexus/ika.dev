<template>
  <div class="container mx-auto text-center">
    <figure class="p-8">
      <img class="mask w-64 mask-circle mx-auto" src="/profile.png" />
    </figure>
    <h1 class="text-4xl pb-8">Ika</h1>
    <ul>
      <li v-for="link in links" class="py-2">
        <a :href="link.href" class="btn btn-outline btn-lg btn-block">{{
          link.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const links = [
  {
    name: "GitHub",
    href: "https://github.com/ikanexus",
  },
];
</script>
