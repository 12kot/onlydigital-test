import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import intervalPlural from 'i18next-intervalplural-postprocessor';

import { ru } from '.';

const namespaces = Object.keys(ru) as Array<keyof typeof ru>;

export const resources = {
  ru,
} as const;

i18n
  .use(intervalPlural)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    compatibilityJSON: 'v4',
    resources,
    ns: namespaces,
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
    defaultNS: 'common',
    fallbackLng: 'ru',
  });

i18n.languages = ['ru'];

export default i18n;
