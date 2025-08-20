export const galleryData = [
    {
        id: "2023",
        en_US: {
            title: "Opened a new office.",
            description: "In May 2023, our audit organization opened a new office.",
        },
        ru_RU: {
            title: "Oткрытие офиса",
            description: " В мае 2023 года наша аудиторская организация открыла новый офис.",
        },
        uz_UZ: {
            title: "Ofisi ochilishi.",
            description: "2023 yil may oyida auditorlik tashkilotimizning yangi ofisi ochildi..",
        },
        photos: Object.values(import.meta.glob("/src/assets/gallery/2023/*.{jpg,jpeg,png,svg}", { eager: true })).map((m) => m.default),
    },
    {
        id: "2024",
        en_US: {
            title: "Best auditor and accountant.",
            description: "On December 9, 2024, the National Association of Accountants and Auditors of Uzbekistan will hold an international scientific and practical conference dedicated to the Day of Accountants and Auditors of the Republic of Uzbekistan at the Ramada by Windham Tashkent Hotel. During the gala event, an award ceremony was held for the employees of our audit organization – winners of the competitions “Best Auditor-2024”, “Best Accountant-2024” and “Best Internal Auditor-2024”.",
        },
        ru_RU: {
            title: "Лучший аудитор и бухгалтер.",
            description: "Национальная ассоциация бухгалтеров и аудиторов Узбекистана 9 декабря 2024 года в отеле «Ramada by Windham Tashkent» проведёт международную научно-практическую конференцию, посвящённую Дню бухгалтера и аудитора Республики Узбекистан. В ходе торжественного мероприятия состоялась церемония награждения сотрудников нашей аудиторской организации – победителей конкурсов «Лучший аудитор-2024», «Лучший бухгалтер-2024» и «Лучший внутренний аудитор-2024»",
        },
        uz_UZ: {
            title: "Eng yaxshi auditor va buxgalter.",
            description: " O'zbekiston buxgalterlari va auditorlari Milliy assotsiatsiyasi tomonidan 2024-yil 9-dekabr kuni 'Ramada by Windham Tashkent' mehmonxonasida bo'lib o'tadigan O'zbekiston Respublikasi buxgalter va auditor kuniga bag'ishlangan xalqaro ilmiy-amaliy konferensiya. Tantanali tadbirda 'eng yaxshi auditor-2024', 'eng yaxshi buxgalter-2024' va 'eng yaxshi ichki auditor-2024' unvonlari uchun auditorlik tashkilotimiz xodimlari  g'oliblar sifatida taqdirlash marosimi bo'lib o'tdi.",
        },
        photos: Object.values(import.meta.glob("/src/assets/gallery/2024/*.{jpg,jpeg,png,svg}", { eager: true })).map((m) => m.default),
    },
    {
        id: "2025",
        en_US: {
            title: "Issyk-Kul (Kyrgyzstan)",
            description: "In June 2025, a conference on improving the qualifications of auditors was held in Issyk-Kul (Kyrgyzstan).",
        },
        ru_RU: {
            title: "Иссык-Куле (Киргизия)",
            description: "В июне 2025 года в Иссык-Куле (Киргизия) прошла конференция по повышению квалификации аудиторов.",
        },
        uz_UZ: {
            title: "Issiqko'l (Qirg'iziston)",
            description: "2025 yil iyun oyida Issiqko'l (Qirg'iziston) da auditorlar malakasini oshirish maqsadida kanferensiya bo'lib o'tdi.",
        },
        photos: Object.values(import.meta.glob("/src/assets/gallery/2025/*.{jpg,jpeg,png,svg}", { eager: true })).map((m) => m.default),
    },
];
