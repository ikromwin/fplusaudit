import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import ImageLoad from "./ImageLoad.jsx";

function NewsCard({ imgSrc, title, date, href }) {
    return (
        <Link to={href} className="group items-center gap-6 w-full no-underline
            grid
            lg:flex
            sm:grid
            ">
            <div className="w-full min-w-[200px] max-w-[200px] max bg-[#eee] rounded-xl overflow-hidden">
                <ImageLoad imgSrc={imgSrc} imgAlt={title} />
            </div>

            <div className="card-text">
                <h3 className="font-extralight text-[color:var(--main)] text-base leading-[var(--txt-space)] mb-4" title={title}>{title.length > 90 ? title.slice(0, 90) + ".." : title}</h3>

                <p className="transition group-hover:bg-[#eee] inline-flex items-center gap-0.5 border border-[color:var(--grey)] px-2 py-[0.3rem] rounded-lg border-solid">
                    <CalendarDays size={16} color="#999" />
                    <span className="group-hover:opacity-100 opacity-60 text-[13px] text-[color:var(--txt-light)] font-normal ml-1.5">{date}</span>
                </p>
            </div>
        </Link>
    );
}


export default NewsCard;