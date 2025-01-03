export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  return ['en', 'sk', 'de', 'fr', 'es'].includes(lang) ? lang : 'en';
}
