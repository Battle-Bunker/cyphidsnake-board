import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [sveltekit(), Icons({ compiler: "svelte" })],
  define: {
    'process.env.ENGINE_URL': JSON.stringify(process.env.ENGINE_URL)
  },
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"]
  },
  server: {
    allowedHosts: true
  }
});
