import { useState } from "react";

// CONTEXTS
import { useLanguage } from "../context/languageContext";

// PUBLIC
import BlackLogo from "../assets/logo-black.svg";

// THIRD PARTY
import { NavLink } from "react-router-dom";

// DATA
import AchievementCategory from "../i18n/data/achievements_category_data.json";
import { languages } from "../i18n/index";

// STYLE
import "../styles/common.css";
import { Globe } from "lucide-react";

export default function Header() {
    const { lang, setLang, content, translations } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const link = [
        { to: "/", label: translations.navbar.home },
        { to: "/about", label: translations.navbar.about + " ▾" },
        { to: "/services", label: translations.navbar.services },
        { to: "/news", label: translations.navbar.news },
        { to: "/contact", label: translations.navbar.contact },
    ];

    const responsiveLink = [
        { to: "/", label: translations.navbar.home },
        { to: "/about", label: translations.navbar.about },
        { to: "/services", label: translations.navbar.services },
        { to: "/news", label: translations.navbar.news },
        { to: "/contact", label: translations.navbar.contact },
    ];

    return (
        <nav className="sticky w-full top-0 left-0 bg-[#fffffff9] py-1 backdrop-filter backdrop-blur-[5px] z-10 [box-shadow:0_0_40px_#00000020]">
            <div className="w-full mx-auto max-w-[1200px] flex items-center justify-between px-4">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-4 py-2 sm:py-2 lg:py-0">
                    <img src={BlackLogo} alt="Logo" width={40} />
                    <div className="uppercase">
                        <h1 className="font-bold text-lg">F-plus audit</h1>
                        <p
                            className="opacity-50 text-sm hidden
                            sm:hidden
                            lg:block"
                        >
                            {translations.navbar.logo_subtitle}
                        </p>
                    </div>
                </NavLink>

                {/* Desktop navigation */}
                <div className="nav-container">
                    <div className="nav-links buttons-menu">
                        {link.map((item, index) =>
                            item.to === "/about" ? (
                                <div key={index} className="relative flex group nav-item-with-dropdown">
                                    {/* Main About link */}
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive ? "button btn-menu active" : "button btn-menu"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>

                                    {/* Dropdown */}
                                    <div className="dropdown hidden group-hover:grid">
                                        <NavLink
                                            to="/about/gallery"
                                            className={({ isActive }) =>
                                                isActive ? "dropdown-button active" : "dropdown-button"
                                            }
                                        >
                                            {translations.navbar.about_dropdown.team_photos}
                                        </NavLink>

                                        {AchievementCategory[lang].map((dropItem, dropIndex) => (
                                            <NavLink
                                                key={dropIndex}
                                                to={`/about/${dropItem.id}`}
                                                className={({ isActive }) =>
                                                    isActive ? "dropdown-button active" : "dropdown-button"
                                                }
                                            >
                                                {dropItem.title}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            )
                                :
                                (
                                    <NavLink
                                        key={index}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive ? "button btn-menu active" : "button btn-menu"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                )
                        )}
                    </div>

                    {/* Language switcher */}
                    <div className="lang-container buttons-menu">
                        <div className="lang-locale button btn-menu">
                            <Globe size={20} />
                            <select value={lang} onChange={(e) => setLang(e.target.value)}>
                                {languages.map((l) => (
                                    <option key={l.code} value={l.code}>
                                        {l.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>





                {/* Responsive menu */}
                <div className="responsive-menu">
                    <div className="buttons-menu">
                        <div
                            className="responsive-button button btn-menu"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <>
                                    <p>Exit</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-x-icon lucide-x"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    <p>More</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-menu-icon lucide-menu"
                                    >
                                        <path d="M4 12h16" />
                                        <path d="M4 18h16" />
                                        <path d="M4 6h16" />
                                    </svg>
                                </>
                            )}
                        </div>
                    </div>

                    {isOpen && (
                        <div className="responsive-dropdown">
                            <div className="responsive-nav-links">
                                {responsiveLink.map((item, index) => (
                                    <NavLink
                                        key={index}
                                        onClick={() => setIsOpen(false)}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "responsive-button responsive-btn-menu active"
                                                : "responsive-button responsive-btn-menu"
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="responsive-achievements-links">
                                <h1 className="title">{content.achievements_title}</h1>
                                <div className="responsive-achievements">
                                    {AchievementCategory[lang].map((dropItem, dropIndex) => (
                                        <>
                                            <NavLink
                                                to="/about/gallery"
                                                className={({ isActive }) =>
                                                    isActive ? "dropdown-button active" : "dropdown-button"
                                                }
                                            >
                                                {translations.navbar.about_dropdown.team_photos}
                                            </NavLink>
                                            <NavLink
                                                key={dropIndex}
                                                to={`/about/${dropItem.id}`}
                                                onClick={() => setIsOpen(!isOpen)}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "responsive-dropdown-button active"
                                                        : "responsive-dropdown-button"
                                                }
                                            >
                                                {dropItem.title}
                                            </NavLink>
                                        </>
                                    ))}
                                </div>
                            </div>

                            <div className="lang-container flex items-center">
                                <Globe size={20} />
                                <select value={lang} onChange={(e) => setLang(e.target.value)}>
                                    {languages.map((l) => (
                                        <option key={l.code} value={l.code}>
                                            {l.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
