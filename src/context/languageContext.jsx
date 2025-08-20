import { createContext, useContext, useState, useEffect } from "react";
import { achievements } from "../i18n/achievements";
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
        achievements: achievements,
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