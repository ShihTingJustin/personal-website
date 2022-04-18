import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import en from './locales/en/translation.json';
import tw from './locales/zh/translation.json';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: tw,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: Cookies.get('lang'),
  fallbackLng: 'zh',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
