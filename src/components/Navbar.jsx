import { Link } from "react-router-dom";
import { useLanguage } from "../context/languageContext";

export default function Navbar() {
    const { lang, setLang, content } = useLanguage();

    const link = [
        { to: "/", label: content.home },
        { to: "/about", label: content.about },
        { to: "/services", label: content.services },
        { to: "/news", label: content.news },
        { to: "/contact", label: content.contact },
    ]

    return (
        <nav>
            {
                link.map((item, index) => (
                    <Link key={index} to={item.to} viewTransition>
                        {item.label}
                    </Link>
                ))
            }

            <select
                value={lang}
                onChange={e => setLang(e.target.value)}
            >
                <option value="en_US">English</option>
                <option value="ru_RU">Russian</option>
                <option value="uz_UZ">Uzbek</option>
            </select>
        </nav>
    );
}