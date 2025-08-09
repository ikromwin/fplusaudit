import Linetitle from "../../components/LineTitleComponent";

export default function Services({ translations }) {
    const t = translations
    const content = t.services_content || {}


    return (
        <div className="page__services maxWidth">
            <Linetitle title={content.LineTitle || null}></Linetitle>
            

            <h2 className="subtitle">{content.subTitle || null}</h2>


            <div className="items">
                {content.services.map((item, i) => <div className="item" key={item} data-number={i + 1}>
                    <p>{item}</p>
                </div>)}
            </div>

        </div>
    );
}