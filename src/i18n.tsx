import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enAbout from './translation files/about me/aboutmeEN.json';
import nlAbout from './translation files/about me/aboutmeNL.json';
import enNavbar from './translation files/navbar/navbarEN.json';
import nlNavbar from './translation files/navbar/navbarNL.json';
import enTech from './translation files/tech/techEN.json';
import nlTech from './translation files/tech/techNL.json';



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: enAbout,
        navbar: enNavbar,
        tech: enTech
      },
      nl: {
        about: nlAbout,
        navbar: nlNavbar,
        tech: nlTech
      }
    },
    fallbackLng: 'en',
    ns: ['about', 'navbar', 'tech'],
    defaultNS: 'about',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;