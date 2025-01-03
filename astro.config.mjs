import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://goodboog.com',
  integrations: [
    tailwind({
      config: { path: './tailwind.config.mjs' },
      applyBaseStyles: false
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US', sk: 'sk-SK', de: 'de-DE', fr: 'fr-FR', es: 'es-ES'
        }
      }
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'always',
    assets: 'assets',
    assetsPrefix: '/_assets',
    experimental: {
      optimizeHoistedScript: true
    }
  },
  vite: {
    build: {
      cssCodeSplit: false,
      cssMinify: 'lightningcss',
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            qrcode: ['qrcode']
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    ssr: {
      noExternal: ['qrcode']
    }
  }
});
