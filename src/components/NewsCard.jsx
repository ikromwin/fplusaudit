import { Link } from "react-router-dom";

function NewsCard({ imgSrc, title, date, href }) {
    return (
        <Link to={href} className="news-card">
            <img src={imgSrc} alt={title} />
            <p>{title}</p>
            <p>{date}</p>
        </Link>
    );
}


export default NewsCard;