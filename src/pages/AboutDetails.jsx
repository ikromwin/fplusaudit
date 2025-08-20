import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Linetitle from "../components/LineTitleComponent";

import AchievementFullData from "../i18n/data/achievemenets.json"
import AchievementCategory from "../i18n/data/category.json"


export default function About({ translations, lang }) {
    const [data, setData] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        if (id) {
            const filteredData = AchievementFullData.filter(item => item.categoryId === parseInt(id));
            setData(filteredData);
        }

    }, [id]);


    return (
        <div className="page__aboutDetails maxWidth">
            <Linetitle title={AchievementCategory[lang][parseInt(id) - 1].title}></Linetitle>

            <table>
                <thead>
                    <tr>
                        <th>{translations.table_name}</th>
                        <th>{translations.table_years}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <a href={item.file} target="_blank" rel="noreferrer">
                                        {item.name}
                                    </a>
                                </td>
                                <td>{item.givenYear}{item.expiredYear ? "-" + item.expiredYear : null}</td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td>
                                No data
                            </td>
                            <td>-</td>
                        </tr>
                    }
                </tbody>
            </table>

        </div>
    );
}
