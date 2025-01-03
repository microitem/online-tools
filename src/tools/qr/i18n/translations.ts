type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    'meta.title': 'Free QR Code Generator Online',
    'meta.description': 'Generate QR codes quickly and easily with our free online tool. Create QR codes for text, URLs, and more.',
    'input.label': 'Enter text or URL',
    'input.placeholder': 'Type or paste your text here...',
    'button.generate': 'Generate QR Code',
    'button.download': 'Download QR Code',
    'result.empty': 'Your QR code will appear here'
  },
  sk: {
    'meta.title': 'Online generátor QR kódov zadarmo',
    'meta.description': 'Generujte QR kódy rýchlo a jednoducho s naším bezplatným online nástrojom. Vytvárajte QR kódy pre text, URL a ďalšie.',
    'input.label': 'Zadajte text alebo URL',
    'input.placeholder': 'Sem napíšte alebo vložte váš text...',
    'button.generate': 'Generovať QR kód',
    'button.download': 'Stiahnuť QR kód',
    'result.empty': 'Tu sa zobrazí váš QR kód'
  },
  de: {
    'meta.title': 'Kostenloser QR-Code Generator Online',
    'meta.description': 'Generieren Sie QR-Codes schnell und einfach mit unserem kostenlosen Online-Tool. Erstellen Sie QR-Codes für Text, URLs und mehr.',
    'input.label': 'Text oder URL eingeben',
    'input.placeholder': 'Text hier eingeben oder einfügen...',
    'button.generate': 'QR-Code generieren',
    'button.download': 'QR-Code herunterladen',
    'result.empty': 'Ihr QR-Code erscheint hier'
  },
  fr: {
    'meta.title': 'Générateur de QR Code Gratuit en Ligne',
    'meta.description': 'Générez des QR codes rapidement et facilement avec notre outil en ligne gratuit. Créez des QR codes pour du texte, des URLs et plus.',
    'input.label': 'Entrez le texte ou l\'URL',
    'input.placeholder': 'Tapez ou collez votre texte ici...',
    'button.generate': 'Générer le QR Code',
    'button.download': 'Télécharger le QR Code',
    'result.empty': 'Votre QR code apparaîtra ici'
  },
  es: {
    'meta.title': 'Generador de Códigos QR Gratis Online',
    'meta.description': 'Genera códigos QR de forma rápida y sencilla con nuestra herramienta online gratuita. Crea códigos QR para texto, URLs y más.',
    'input.label': 'Ingrese texto o URL',
    'input.placeholder': 'Escriba o pegue su texto aquí...',
    'button.generate': 'Generar Código QR',
    'button.download': 'Descargar Código QR',
    'result.empty': 'Su código QR aparecerá aquí'
  }
};

export const useTranslations = (lang: string = 'en') => {
  return (key: string): string => {
    return translations[lang as keyof typeof translations]?.[key] || translations.en[key];
  };
};
