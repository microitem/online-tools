import { defineMiddleware } from 'astro/middleware';
import { getLanguageFromURL } from './i18n/config';

export const onRequest = defineMiddleware(async (context, next) => {
  // Add security headers
  context.response.headers.set('X-Content-Type-Options', 'nosniff');
  context.response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  context.response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Add caching headers for static assets
  if (context.url.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|css|js)$/)) {
    context.response.headers.set('Cache-Control', 'public, max-age=31536000');
  }

  // Language detection and redirect
  if (context.url.pathname === '/') {
    const preferredLang = context.request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';
    const targetLang = ['en', 'sk', 'de', 'fr', 'es'].includes(preferredLang) ? preferredLang : 'en';
    return context.redirect(`/${targetLang}`);
  }

  return next();
});
