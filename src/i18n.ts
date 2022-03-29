import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import homepageNs from '../locales/en/homepage.json';

export const defaultNS = 'homepage';
export const resources = {
  en: {
    homepageNs,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: 'en',
    ns: ['homepage'],
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      useSuspense: false,
    },
  });

export default i18n;
