// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    theme: {
      container: {
        center: true,
      },
    },
    config: {
      plugins: [require("@tailwindcss/typography"), require("daisyui")],
    },
  },
});
