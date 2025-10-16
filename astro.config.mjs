import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "font-src fonts.bunny.net",
        "img-src 'self' data:",
      ],
      styleDirective: {
        resources: [
          "'self'",
          "fonts.bunny.net"
        ]
      }
    }
  }
});
