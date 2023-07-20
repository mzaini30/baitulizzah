import { defineConfig } from 'astro/config';
import yaml from 'vite-plugin-yaml2';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [svelte()]
});