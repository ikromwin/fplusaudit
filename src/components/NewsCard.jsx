import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

function NewsCard({ imgSrc, title, date, href }) {
    return (
        <Link to={href} className="news-card">
            <div className="card-image">
                <img src={imgSrc} alt="News image to show main picture." />
            </div>

            <div className="card-text">
                <h3 title={title}>{title.length > 90 ? title.slice(0, 90) + ".." : title}</h3>

                <p>
                    <CalendarDays size={16} color="var(--txt-light)" />
                    <span>{date}</span>
                </p>
            </div>
        </Link>
    );
}


export default NewsCard;