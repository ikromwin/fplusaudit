import { useLanguage } from "../../context/languageContext.jsx";
import Linetitle from "../../components/LineTitleComponent";
import NewsCard from "../../components/NewsCard.jsx";

export default function NewsList({ translations }) {
    const t = translations
    const { data } = useLanguage();


    return (
        <div className="page__news maxWidth">
            <Linetitle title={t.news || null}></Linetitle>

            <div className="news-component">
                <div className="items">
                    {data.news && data.news.length > 0 ? data.news.map((newsItem, index) => (
                        <NewsCard
                            key={index}
                            imgSrc={newsItem.image || Thumbnail}
                            title={newsItem.title || "No title available"}
                            date={newsItem.date || "No date available"}
                            href={`/news/${newsItem.id}`}
                        />
                    )) : <null />}
                </div>
            </div>


        </div>
    );
}