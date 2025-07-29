import Linetitle from "../../components/LineTitleComponent";


export default function About({ translations }) {
    const t = translations

    const data = t.achievements_data
    const filteredData = data.filter(item => item.category === t.achievements_category)
    

    return (
        <div className="page__aboutDetails maxWidth">
            <Linetitle title={"About Details"}></Linetitle>

            <table>
                <thead>
                    <tr>
                        <th>{t.about_table_name}</th>
                        <th>{t.about_table_years}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="https://cdn.sanity.io/files/dawuw7lx/production/afcd1b043cca8649b4eb71701671e9801fa08684.pdf" target="_blank">
                                Yuldashev Farhodjon Maxmudjonovich - Ichki auditor sertifikati
                            </a>
                        </td>
                        <td>2024-yildan 2034-yilgacha</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://cdn.sanity.io/files/dawuw7lx/production/b4085a5256c911ee02869f96f7acdbfc04e28af6.pdf" target="_blank">
                                Yuldashev Farhodjon Maxmudjonovich - 2020-yilning eng yaxshi ichki auditor
                            </a>
                        </td>
                        <td>2020</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
