import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { resources } from "../locale/resources";

const DETECTION_OPTIONS = {
    order: ['localStorage', 'navigator', 'cookie'],
    caches: ['localStorage']
}

export const initTranslation = () => {
    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            resources,
            detection: DETECTION_OPTIONS,
            ns: ['common'],
            defaultNS: 'common',
            fallbackLng: 'en',
            interpolation: { escapeValue: false },
            saveMissing: false,
            react: {
                bindI18n: 'languageChanged',
                bindI18nStore: '',
                transEmptyNodeValue: '',
                transSupportBasicHtmlNodes: true,
                transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
                useSuspense: false,
            }
        });
}