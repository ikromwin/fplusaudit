
import Footer from "../components/Footer";
import home_content from "./contents/home_content.json";
import news_data from "./data/news_data.json";

export const i18n = {
    en_US: {
        CONTENT: {
            // COMMON
            // Navbar
            logoSubtitle: "Auditor organization",


            // Footer
            footerContactUs: "Contact Us",
            footerTimes: "<span>Working hours:</span> from Monday to Friday at 9:00-17:00",
            footerAddress: "<span>Address:</span> Tashkent city, Yashnabad district, Cholpon MFY, Fergana road, 5a-house, room 26.",




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

            // Vacancy page
            vacancy: "Vacancy",
        },
        DATA: {
            news: news_data.en_US
        },

    },

    ru_RU: {
        CONTENT: {
            // COMMON
            // Navbar
            logoSubtitle: "Аудиторская организация",

            // Footer
            footerContactUs: "Связаться с нами",
            footerTimes: "<span>Время работы:</span> с понедельника по пятницу с 9:00 до 17:00",
            footerAddress: "<span>Адрес:</span> г. Ташкент, Яшнабадский район, МФЙ Чолпон, Ферганская дорога, дом 5а, комната 26.",


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

            // Vacancy page
            vacancy: "Вакансии",

        },
        DATA: {
            news: news_data.ru_RU
        }
    },

    uz_UZ: {
        CONTENT: {
            // COMMON
            // Navbar
            logoSubtitle: "Auditorlik tashkiloti",


            // Footer
            footerContactUs: "Biz bilan bog'lanish",
            footerTimes: "<span>Ish vaqti:</span> dushanbadan jumagacha 9:00-17:00",
            footerAddress: "<span>Manzil:</span> Toshkent shahar, Yashnobod tumani, Cho'lpon MFY, Farg'ona yo'li, 5a-uy, 26-xona.",




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

            // Vacancy page
            vacancy: "Vakansiya",
        },
        DATA: {
            news: news_data.uz_UZ
        }
    },
}