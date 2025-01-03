const translations = {
  en: {
    'meta.title': 'Free QR Code Generator Online',
    'meta.description': 'Generate QR codes quickly and easily with our free online tool. Create QR codes for text, URLs, and more.',
    'input.label': 'Enter text or URL',
    'input.placeholder': 'Type or paste your text here...',
    'button.generate': 'Generate QR Code',
    'result.empty': 'Your QR code will appear here'
  },
  sk: {
    'meta.title': 'Online generátor QR kódov zadarmo',
    'meta.description': 'Generujte QR kódy rýchlo a jednoducho s naším bezplatným online nástrojom. Vytvárajte QR kódy pre text, URL a ďalšie.',
    'input.label': 'Zadajte text alebo URL',
    'input.placeholder': 'Sem napíšte alebo vložte váš text...',
    'button.generate': 'Generovať QR kód',
    'result.empty': 'Tu sa zobrazí váš QR kód'
  }
};

export const useTranslations = (lang: string = 'en') => {
  return (key: string): string => {
    return translations[lang as keyof typeof translations]?.[key] || translations.en[key];
  };
};
