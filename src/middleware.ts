import { defineMiddleware } from 'astro/middleware';
import { getLanguageFromURL } from './i18n/config';

export const onRequest = defineMiddleware(async ({ request, url }, next) => {
  const response = await next();
  
  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // Add caching headers for static assets
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|ico|svg|css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000');
  }

  // Language detection and redirect for root path
  if (url.pathname === '/') {
    const preferredLang = request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] || 'en';
    const targetLang = ['en', 'sk', 'de', 'fr', 'es'].includes(preferredLang) ? preferredLang : 'en';
    return new Response(null, {
      status: 302,
      headers: { Location: `/${targetLang}` }
    });
  }

  return response;
});
