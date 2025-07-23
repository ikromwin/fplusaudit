import { createContext, useContext, useState, useEffect } from "react";
import { i18n } from "../i18n/data";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageContext = createContext();

const defaultLanguage = "uz_UZ";
const langMap = {
    uz: "uz_UZ",
    ru: "ru_RU",
    en: "en_US",
};
const langPrefix = {
    uz_UZ: "uz",
    ru_RU: "ru",
    en_US: "en",
};

export function LanguageProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Get language from path or localStorage
    const getLangFromPath = () => {
        const pathLang = location.pathname.split("/")[1];
        return langMap[pathLang] || localStorage.getItem("lang") || defaultLanguage;
    };

    const [lang, setLang] = useState(getLangFromPath);

    // Sync language with URL path
    useEffect(() => {
        const pathLang = location.pathname.split("/")[1];
        const urlLang = langMap[pathLang];
        if (urlLang && urlLang !== lang) {
            setLang(urlLang);
        }
    // eslint-disable-next-line
    }, [location.pathname]);

    // Save language to localStorage and update URL if needed
    useEffect(() => {
        localStorage.setItem("lang", lang);
        const prefix = "/" + langPrefix[lang];
        if (!location.pathname.startsWith(prefix)) {
            setLoading(true);
            navigate(prefix + location.pathname.replace(/^\/(uz|ru|en)/, ""), { replace: true });
            setTimeout(() => setLoading(false), 0); // simulate loading
        }
    // eslint-disable-next-line
    }, [lang]);

    const value = {
        lang,
        setLang: (newLang) => {
            setLoading(true);
            setLang(newLang);
            setTimeout(() => setLoading(false), 300); // simulate loading
        },
        content: i18n[lang]?.CONTENT || i18n[defaultLanguage].CONTENT,
        data: i18n[lang]?.DATA || i18n[defaultLanguage].DATA,
        loading,
    };

    return (
        <LanguageContext.Provider value={value}>
            {loading ? <div>
                <p></p>
            </div> : children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}