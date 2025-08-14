
import home_content from "./contents/home_content.json";
import about_content from "./contents/about_content.json";
import services_content from "./contents/services_content.json";
import contact_content from "./contents/contact_content.json";
import vacancy_content from "./contents/vacancy_content.json";

import news_data from "./data/news_data.json";
import achievements_category from "./data/achievements_category_data.json";


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
            footerCopyRights: "2016, © 'F-PLUS AUDIT' LLC Audit organization.",




            // Home page
            home: "Home",
            home_content: home_content.en_US,


            // About page
            about: "About Us",
            about_content: about_content.en_US,
            teamImages: "Team Photos",
            achienvementsImages: "Achienvements",
            achievements_title: "Achievements",
            achievements_category: achievements_category.en_US,


            // About Details
            about_table_name: "Names of certificates",
            about_table_years: "Given years",
            about_gallery_page: "Gallery",


            // Services page
            services: "Services",
            services_content: services_content.en_US,

            // News page
            news: "News",
            goBack: "Go back",

            // News page
            contact: "Contact",
            contact_content: contact_content.en_US,

            // Vacancy page
            vacancy: "Work with us!",
            vacancy_content: vacancy_content.en_US,
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
            footerCopyRights: "2016, © 'F-PLUS AUDIT' ООО Аудиторская организация.",


            // Footer
            // Home page
            home: "Главная",
            home_content: home_content.ru_RU,

            // About page
            about: "О нас",
            about_content: about_content.ru_RU,
            teamImages: "Фотографии команды",
            achienvementsImages: "Достижения",

            // About Details
            about_table_name: "Названия сертификатов",
            about_table_years: "Дано лет",
            about_gallery_page: "Галерея",

            achievements_category: achievements_category.ru_RU,

            // Services page
            services: "Услуги",
            services_content: services_content.ru_RU,

            // News page
            news: "Новости",
            goBack: "Возвращаться",

            // Contact page
            contact: "Контакты",
            contact_content: contact_content.ru_RU,

            // Vacancy page
            vacancy: "Работайте с нами!",
            vacancy_content: vacancy_content.ru_RU,

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
            footerCopyRights: "2016, © 'F-PLUS AUDIT' MChJ Auditorlik tashkiloti.",




            // Home page
            home: "Bosh sahifa",
            home_content: home_content.uz_UZ,

            // About page
            about: "Biz haqimizda",
            about_content: about_content.uz_UZ,
            teamImages: "Jamoaviy rasmlar",
            achienvementsImages: "Yutuqlarimiz",

            // About Details
            about_table_name: "Sertifikat nomlari",
            about_table_years: "Berilgan yili",
            about_gallery_page: "Galeriya",

            achievements_category: achievements_category.en_US.certificates,


            // Services page
            services: "Xizmatlar",
            services_content: services_content.uz_UZ,

            // News page
            news: "Yangiliklar",
            goBack: "Orqaga qaytish",

            // News page
            contact: "Aloqa",
            contact_content: contact_content.uz_UZ,

            // Vacancy page
            vacancy: "Bizning jamoamizga qo’shiling!",
            vacancy_content: vacancy_content.uz_UZ,
        },
        DATA: {
            news: news_data.uz_UZ
        }
    },
}
