import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://goodboog.com',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          sk: 'sk-SK',
          de: 'de-DE',
          fr: 'fr-FR',
          es: 'es-ES'
        }
      }
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  },
  compressHTML: true
});
