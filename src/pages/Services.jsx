import Linetitle from "../components/LineTitleComponent";

export default function Services({ translations }) {


    return (
        <div className="page__services maxWidth">
            <Linetitle title={translations.services.title || null}></Linetitle>


            <h2 className="subtitle">{translations.services.description || null}</h2>


            <div className="items">
                {translations.services.items.map((item, i) => <div className="item" key={item} data-number={i + 1}>
                    <p>{item}</p>
                </div>)}
            </div>

        </div>
    );
}