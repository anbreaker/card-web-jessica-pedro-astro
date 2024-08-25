import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anbreaker.github.io/jessica-ns-pedro/',
  base: '/jessica-ns-pedro/',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
