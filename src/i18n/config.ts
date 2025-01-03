export const languages = {
  en: 'English',
  sk: 'Slovenčina',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español'
};

export const defaultLang = 'en';

export function getLanguageFromURL(pathname: string) {
  const [, lang] = pathname.split('/');
  return lang in languages ? lang : defaultLang;
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string) {
    return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
  };
}
