import { NavLink, useParams } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";
import Linetitle from "../../components/LineTitleComponent";



export default function NewsList({ language }) {
    const { data, content } = useLanguage();
    console.log("DATA", data);
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
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#555"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z"></path></svg>
                        <span>{content.goBack}</span>
                    </NavLink>
                </div>
                <p className="date">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#6e7783ff">
                        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z">
                        </path>
                    </svg>

                    <span> {newsDetails?.date}</span>
                </p>
            </div>

            <div className="newsDetails-content">
                <p>{newsDetails?.content}</p>
            </div>
        </div>
    );
}
