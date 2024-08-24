import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://anbreaker.github.io/card-web-jessica-pedro-astro/',
  base: '/card-web-jessica-pedro-astro/',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
