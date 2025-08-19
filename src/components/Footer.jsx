import { Mail, Phone, SendHorizontal } from 'lucide-react';
import WhiteLogo from '../assets/logo-white.svg';
import { NavLink } from 'react-router-dom';


export default function Footer({ translations }) {

    const { footer } = translations;


    const link = [
        { to: "/", label: translations.navbar.home },
        { to: "/about", label: translations.navbar.about },
        { to: "/services", label: translations.navbar.services },
        { to: "/news", label: translations.navbar.news },
        { to: "/contact", label: translations.navbar.contact },
        { to: "/vacancy", label: translations.navbar.vacancy }
    ]

    return (
        <footer className="relative text-[color:var(--light)] overflow-hidden mt-32 pt-8 pb-4 px-4 bg-[#3c42c8]">
            <div className="maxWidth">
                <div className="logo">
                    <img src={WhiteLogo} alt="White Logo" />
                </div>

                <ul className='relative flex justify-between gap-8 mt-8'>
                    <li className='text-base font-extralight flex flex-col gap-4'>
                        <h3 className='text-lg font-normal text-[color:var(--light)] uppercase opacity-50 mb-[0.8rem]'>{footer.contact_us}</h3>
                        <p className='leading-[25px]' dangerouslySetInnerHTML={{ __html: footer.working_hours }}>{ }</p>
                        <p className='leading-[25px]' dangerouslySetInnerHTML={{ __html: footer.address }}></p>

                        <div className='flex gap-4 mt-8'>
                            <a className='relative w-[55px] h-[55px] flex items-center justify-center after:absolute after:content-[""] after:w-full after:h-full after:transition-[0.2s] after:duration-[ease] after:rounded-[50%] after:left-0 after:top-0 active:after:transition-[0s] after:bg-[#ffffff20]' href="tel:+998785550070">
                                <Phone size={18} />
                            </a>
                            <a className='relative w-[55px] h-[55px] flex items-center justify-center after:absolute after:content-[""] after:w-full after:h-full after:transition-[0.2s] after:duration-[ease] after:rounded-[50%] after:left-0 after:top-0 active:after:transition-[0s] after:bg-[#ffffff20]' href="mailto:info@f-plusaudit.uz">
                                <Mail size={18} />
                            </a>
                            <a className='relative w-[55px] h-[55px] flex items-center justify-center after:absolute after:content-[""] after:w-full after:h-full after:transition-[0.2s] after:duration-[ease] after:rounded-[50%] after:left-0 after:top-0 active:after:transition-[0s] after:bg-[#ffffff20]' href="https://t.me/fplusaudit" target="_blank" rel="noopener noreferrer">
                                <SendHorizontal size={18} />
                            </a>
                        </div>
                    </li>
                    <li className='list-links'>
                        <h3 className='text-lg font-normal text-[color:var(--light)] uppercase opacity-50 mb-[0.8rem]'>{footer.all_pages}</h3>
                        <ul className='flex flex-col gap-2'>
                            {
                                link.map((item, index) =>
                                    <li key={index}>
                                        <NavLink className="text-base font-light transition-[0.2s] duration-[ease] px-0 py-[0.2rem] rounded-[5px] hover:text-white hover:px-2 hover:py-[0.2rem] hover:bg-[#eeeeee20]" to={item.to}>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </li>
                </ul>

                <div className="z-[2] w-full h-40 overflow-hidden rounded-2xl mt-8 mb-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.3651184905256!2d69.29276540446128!3d41.298845259973234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef53218cd742b%3A0x4e87825906893778!2sElbek%20Street%205A%2C%20100139%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1727372050458!5m2!1sen!2s" width="1200" height="160"></iframe>
                </div>

                <div className='h-[0.5px] w-full bg-[white]'></div>
                <p className='footer-copyright'>{footer.copyright}</p>
            </div>
        </footer>
    );
}