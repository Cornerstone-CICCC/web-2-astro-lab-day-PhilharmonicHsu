// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
      },
    },
    css: {
      postcss: './postcss.config.cjs',
    },
  }
});
