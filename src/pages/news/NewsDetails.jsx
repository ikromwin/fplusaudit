import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";

export default function NewsDetails() {
  const { data, content } = useLanguage();
  const { id } = useParams();
  const newsDetails = data.news?.find((item) => item.id.toString() === id.toString());

  return (
    <div className="page__newsDetails maxWidth">
      <Linetitle title={newsDetails?.title} />

      <div className="newsDetails-photo">
        <img src={newsDetails?.image} alt={newsDetails?.title} />
      </div>

      <div className="newsDetails-utils">
        <div className="goBack">
          <NavLink to={"/news"}>
            <ArrowLeft size={18} strokeWidth={1.5} />
            <span>{content.goBack}</span>
          </NavLink>
        </div>
        <p className="date">
          <CalendarDays size={16} color="var(--txt-light)" />
          <span> {newsDetails?.date}</span>
        </p>
      </div>

      <div className="newsDetails-content">
        <p>{newsDetails?.content}</p>
      </div>
    </div>
  );
}
