const translations = {
 en: {
   title: 'Unit Converter',
   length: 'Length',
   weight: 'Weight',
   volume: 'Volume',
   convert: 'Convert',
 },
 sk: {
   title: 'Prevodník jednotiek',
   length: 'Dĺžka',
   weight: 'Hmotnosť', 
   volume: 'Objem',
   convert: 'Previesť',
 }
};

export const useTranslations = (locale: string) => translations[locale as keyof typeof translations];
