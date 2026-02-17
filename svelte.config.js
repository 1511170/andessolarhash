import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: false
    }),
    alias: {
      $lib: 'src/lib',
      '$lib/*': 'src/lib/*'
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      crawl: true,
      entries: ['*']
    }
  }
};

export default config;
