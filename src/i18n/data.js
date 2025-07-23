
import home_content from "./contents/home_content";

export const i18n = {
    en_US: {
        CONTENT: {
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
            news: [
                { id: 1, title: "Latest News", content: "This is the latest news content." },
                { id: 2, title: "Upcoming Events", content: "Details about upcoming events." }
            ]
        },

    },
    uz_UZ: {
        CONTENT: {
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
            news: [
                { id: 1, title: "Latest News", content: "This is the latest news content." },
                { id: 2, title: "Upcoming Events", content: "Details about upcoming events." }
            ],
        }
    },
    ru_RU: {
        CONTENT: {
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
            news: [
                { id: 1, title: "Последние новости", content: "Это содержание последних новостей." },
                { id: 2, title: "Предстоящие события", content: "Детали о предстоящих событиях." }
            ],
        }
    },
}