import { createContext, useContext, useState, useEffect } from "react";
import { i18n } from "../i18n/data";
import { translations } from "../i18n/index";

const LanguageContext = createContext();

const defaultLanguage = "uz_UZ";

export function LanguageProvider({ children }) {
    const [loading, setLoading] = useState(false);


    const getLangFromStorage = () => {
        return localStorage.getItem("lang") || defaultLanguage;
    };

    const [lang, setLang] = useState(getLangFromStorage);

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const value = {
        lang,
        setLang: (newLang) => {
            setLoading(true);
            setLang(newLang);
            setTimeout(() => setLoading(false), 800);
        },
        content: i18n[lang]?.CONTENT || i18n[defaultLanguage].CONTENT,
        data: i18n[lang]?.DATA || i18n[defaultLanguage].DATA,
        translations: translations[lang],
        loading,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}