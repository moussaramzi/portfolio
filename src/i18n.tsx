import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enAbout from './translation files/about me/aboutmeEN.json';
import nlAbout from './translation files/about me/aboutmeNL.json';
import enNavbar from './translation files/navbar/navbarEN.json';
import nlNavbar from './translation files/navbar/navbarNL.json';
import enTech from './translation files/tech/techEN.json';
import nlTech from './translation files/tech/techNL.json';
import nlError from './translation files/error/errorNL.json';
import enError from './translation files/error/errorEN.json';
import enProjects from './translation files/projects/projectsEN.json';
import nlProjects from './translation files/projects/projectsNL.json';
import enContact from './translation files/contact/contactEN.json';
import nlContact from './translation files/contact/contactNL.json';
import enSetting from './translation files/setting/settingEN.json';
import nlSetting from './translation files/setting/settingNL.json';
import enInternship from './translation files/internship/internshipEN.json';
import nlInternship  from './translation files/internship/internshipNL.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: enAbout,
        navbar: enNavbar,
        tech: enTech,
        error: enError,
        projects: enProjects,
        contact: enContact,
        setting: enSetting,
        internship: enInternship
      },
      nl: {
        about: nlAbout,
        navbar: nlNavbar,
        tech: nlTech,
        error: nlError,
        projects: nlProjects,
        contact: nlContact,
        setting: nlSetting,
        internship: nlInternship

      }
    },
    fallbackLng: 'en',
    ns: ['about', 'navbar', 'tech', 'error','projects', 'contact', 'setting', 'internship'],
    defaultNS: 'about',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;