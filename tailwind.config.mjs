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
        blinkCursor: "blinkCursor 750ms steps(10) infinite normal",
      },
      keyframes: {
        typewriter: {
          from: { width: "0" },
          to: { width: "7rem" },
        },
        blinkCursor: {
          from: { borderRightColor: "currentColor" },
          to: { borderRightColor: "transparent" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
