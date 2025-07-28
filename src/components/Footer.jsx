import WhiteLogo from '../assets/logo-white.svg';
import Email from '../assets/email.svg';
import Phone from '../assets/phone.svg';
import Telegram from '../assets/TG.svg';
import { Link, NavLink } from 'react-router-dom';


export default function Footer({ translations }) {


    const t = translations || {};

    return (
        <footer className="footer">
            <div className="maxWidth">
                <div className="logo">
                    <img src={WhiteLogo} alt="White Logo" />
                </div>

                <div className="overlay">
                    <img src={WhiteLogo} alt="White Logo for overlay background" />
                </div>

                <ul className='footer-list'>
                    <li className='list-subtitle'>
                        <h3>{t.footerContactUs}</h3>
                        <p dangerouslySetInnerHTML={{ __html: t.footerTimes }}></p>
                        <p dangerouslySetInnerHTML={{ __html: t.footerAddress }}></p>

                        <div className='socials'>
                            <a href="tell://78 555 00 70">
                                <img src={Phone} alt="Phone Call to Contact." />
                            </a>
                            <a href="mailto:info@f-plusaudit.uz">
                                <img src={Email} alt="Mail to Contact." />
                            </a>
                            <a href="https://t.me/fplusaudit" target="_blank">
                                <img src={Telegram} alt="Telegram chanell to show up-to-date posts, blogs, and news." />
                            </a>
                        </div>
                    </li>
                    <li className='list-links'>
                        <h3>{t.footerContactUs}</h3>
                        <ul>
                            <li><NavLink to="/">{t.home}</NavLink></li>
                            <li><NavLink to="/about">{t.about}</NavLink></li>
                            <li><NavLink to="/services">{t.services}</NavLink></li>
                            <li><NavLink to="/news">{t.news}</NavLink></li>
                            <li><NavLink to="/contact">{t.contact}</NavLink></li>
                            <li><NavLink to="/vacancy">{t.vacancy}</NavLink></li>
                        </ul>
                    </li>
                </ul>

                <div className="footer-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.3651184905256!2d69.29276540446128!3d41.298845259973234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef53218cd742b%3A0x4e87825906893778!2sElbek%20Street%205A%2C%20100139%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1727372050458!5m2!1sen!2s" width="1200" height="160"></iframe>
                </div>

                <div className='footer-line'></div>
                <p className='footer-copyright'>{t.footerCopyRights}</p>
            </div>
        </footer>
    );
}