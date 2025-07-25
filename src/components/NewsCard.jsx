function NewsCard({ news }) {
    return (
        <div className="news-card">
            <h3 className="news-title">{news.title}</h3>
            <p className="news-date">{new Date(news.date).toLocaleDateString()}</p>
            <p className="news-description">{news.description}</p>
            <a href={news.link} className="news-link">Read more</a>
        </div>
    );
}


export default NewsCard;