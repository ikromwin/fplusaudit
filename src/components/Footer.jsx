import WhiteLogo from '../assets/logo-white.svg';
import Email from '../assets/email.svg';
import Phone from '../assets/phone.svg';
import Telegram from '../assets/TG.svg';


export default function Footer({ translations }) {


    const t = translations || {};

    return (
        <footer className="footer">
            <div className="maxWidth">
                <div className="logo">
                    <img src={WhiteLogo} alt="Logo" />
                </div>

                <div className="overlay">
                    <img src={WhiteLogo} alt="Logo" />
                </div>

                <ul className='footer-list'>
                    <li className='list-subtitle'>
                        <h3>{t.footerContactUs}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t.footerTimes }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.footerAddress }}></p>

                        <div className='socials'>
                            <a href="tell://78 555 00 70">
                                <img src={Phone} alt="78 555 00 70" />
                            </a>
                            <a href="mailto:info@f-plusaudit.uz">
                                <img src={Email} alt="info@f-plusaudit.uz" />
                            </a>
                            <a href="https://t.me/fplusaudit" target="_blank">
                                <img src={Telegram} alt="fplusaudit" />
                            </a>
                        </div>
                    </li>
                    <li className='list-links'>
                        <h3>{t.footerContactUs}</h3>
                        <ul>
                            <li><a href="/">{t.home}</a></li>
                            <li><a href="/about">{t.about}</a></li>
                            <li><a href="/services">{t.services}</a></li>
                            <li><a href="/news">{t.news}</a></li>
                            <li><a href="/contact">{t.contact}</a></li>
                            <li><a href="/vacancy">{t.vacancy}</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.3651184905256!2d69.29276540446128!3d41.298845259973234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef53218cd742b%3A0x4e87825906893778!2sElbek%20Street%205A%2C%20100139%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1727372050458!5m2!1sen!2s" width="1200" height="160"></iframe>
                </div>

                <div className='footer-line'></div>
                <p className='footer-copyright'>2016-2025 © 'F-PLUS AUDIT' LLC Audit organization.</p>
            </div>
        </footer>
    );
}