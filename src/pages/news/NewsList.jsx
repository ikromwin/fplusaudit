
import Linetitle from "../../components/LineTitleComponent";
import NewsCard from "../../components/NewsCard.jsx";

export default function NewsList({ translations }) {


    return (
        <div className="page__news maxWidth">
            <Linetitle title={translations.news.title || null}></Linetitle>

            <div className="news-component">
                <div className="items">
                    {translations.news.news && translations.news.news.length > 0 ? translations.news.news.map((newsItem, index) => (
                        <NewsCard
                            key={index}
                            imgSrc={newsItem.image || Thumbnail}
                            title={newsItem.title || "No title available"}
                            date={newsItem.date || "No date available"}
                            href={`/news/${newsItem.id}`}
                        />
                    )) : null}
                </div>
            </div>


        </div>
    );
}