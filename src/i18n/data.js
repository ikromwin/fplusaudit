
import home_content from "./contents/home_content.json";
import news_data from "./data/news_data.json";

export const i18n = {
    en_US: {
        CONTENT: {
            // COMMON
            // Navbar
            logoSubtitle: "Auditor organization",


            // Footer



            // Home page
            home: "Home",
            home_content: home_content.en_US,

            // About page
            about: "About",

            // Services page
            services: "Services",

            // News page
            news: "News",

            // News page
            contact: "Contact",
        },
        DATA: {
            news: news_data.en_US
        },

    },
    uz_UZ: {
        CONTENT: {
            // COMMON
            // Navbar
            logoSubtitle: "Auditorlik tashkiloti",


            // Footer
            // Home page
            home: "Bosh sahifa",
            home_content: home_content.uz_UZ,

            // About page
            about: "Biz haqimizda",

            // Services page
            services: "Xizmatlar",

            // News page
            news: "Yangiliklar",

            // News page
            contact: "Aloqa",
        },
        DATA: {
            news: news_data.uz_UZ
        }
    },
    ru_RU: {
        CONTENT: {
            // COMMON
            // Navbar
            logoSubtitle: "Аудиторская организация",


            // Footer
            // Home page
            home: "Главная",
            home_content: home_content.ru_RU,

            // About page
            about: "О нас",

            // Services page
            services: "Услуги",

            // News page
            news: "Новости",

            // Contact page
            contact: "Контакты",
        },
        DATA: {
            news: news_data.ru_RU
        }
    },
}