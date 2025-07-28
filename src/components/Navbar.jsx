import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/languageContext"
import BlackLogo from "../assets/logo-black.svg";

import "../styles/common.css";

import AchievementCategory from "../i18n/data/achievements_category_data.json"

export default function Navbar() {
    const { lang, setLang, content } = useLanguage();

    const link = [
        { to: "/", label: content.home },
        { to: "/about", label: content.about + " " + "▾" },
        { to: "/services", label: content.services },
        { to: "/news", label: content.news },
        { to: "/contact", label: content.contact }
    ]

    console.log(content.achievements_category);




    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={BlackLogo} alt="F-plus audit logo" width={40} />

                    <div>
                        <h1>F-plus audit</h1>
                        <p>{content.logoSubtitle}</p>
                    </div>
                </div>


                <div className="nav-container">
                    <div className="nav-links buttons-menu">
                        {
                            link.map((item, index) => (
                                <NavLink key={index} to={item.to} className={({ isActive }) => isActive ? "button btn-menu active" : "button btn-menu"}>
                                    {item.label}

                                    {item.to === "/about" && (
                                        <div className="dropdown">
                                            {AchievementCategory[lang].map((dropItem, dropIndex) => (
                                                <NavLink
                                                    key={dropIndex}
                                                    to={`/about/${dropItem.slug}`}
                                                    className={({ isActive }) =>
                                                        isActive ? "dropdown-button active" : "dropdown-button"
                                                    }
                                                >
                                                    {dropItem.title}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}


                                </NavLink>
                            ))
                        }
                    </div>



                    <div className="lang-container buttons-menu">
                        <div className="lang-locale button btn-menu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>

                            <select
                                value={lang}
                                onChange={e => setLang(e.target.value)}
                                className=" "
                            >
                                <option value="en_US">English</option>
                                <option value="ru_RU">Russian</option>
                                <option value="uz_UZ">Uzbek</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="responsive-menu">
                    <div className="buttons-menu">
                        <div className="responsive-button  button btn-menu">
                            <p>More</p>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={20} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>

                    <div className="responsive-dropdown">
                        Links here
                    </div>
                </div>
            </div>
        </nav>
    );
}