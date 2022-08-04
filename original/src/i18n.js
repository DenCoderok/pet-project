import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
     .use(initReactI18next) // passes i18n down to react-i18next
     .use(LanguageDetector) // получить значения какой язык использовать
     .use(HttpApi) // получить перевед со стороны
     .init({
         supportedLngs: ['en', 'ru', 'ua'],// доступные языки
         fallbackLng: "ru",// дефолт язык
         detection: {
             order: ['path', 'localStorage', 'navigator', 'htmlTag'],
             caches: ['localStorage'],
         },
         backend: {
             loadPath: 'assets/locales/{{lng}}/translation.json',
         },
        // react: { useSuspense: false }
     });

//export default i18n;
