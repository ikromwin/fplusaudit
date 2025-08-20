import { Link, useParams } from "react-router-dom";
import Linetitle from "../../components/LineTitleComponent";
import { ArrowLeft, CalendarDays } from "lucide-react";



export default function NewsList({ translations }) {
    const { id } = useParams();

    const newsDetails = translations.news?.news?.find((item) => item.id.toString() === id.toString());

    console.log(newsDetails);



    return (
        <div className="page__newsDetails px-4 maxWidth">
            <Linetitle title={newsDetails?.title} />

            <div className="newsDetails-photo">
                <img src={newsDetails?.image} alt={newsDetails?.title} />
            </div>

            <div className="newsDetails-utils">
                <Link to={"/news/"} className="inline-flex items-center mb-8 text-[#ccc] active:scale-95  font-semibold text-sm gap-2 hover:text-[#3c42c8]">
                    <ArrowLeft size={18} strokeWidth={1.5} />
                    <span>{translations.buttons.return_button}</span>
                </Link>


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
