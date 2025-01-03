const translations = {
  en: {
    title: 'Calculator',
    clear: 'C',
    equals: '=',
  },
  sk: {
    title: 'Kalkulačka',
    clear: 'C',
    equals: '=',
  }
};

export const useTranslations = (locale: string) => translations[locale as keyof typeof translations];
