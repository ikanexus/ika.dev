/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      animation: {
        typewriter: "typewriter 1s steps(5) 1s 1 normal both",
        blinkCursor: "blinkCursor 900ms steps(5) infinite normal",
      },
      keyframes: {
        typewriter: {
          from: { width: "0" },
          to: { width: "7rem" },
        },
        blinkCursor: {
          from: { borderBottomColor: "currentColor" },
          to: { borderBottomColor: "transparent" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
