import Linetitle from "../components/LineTitleComponent";

export default function Vacancy({ translations }) {
    


    return (
        <div className="page__vacancy maxWidth">
            <Linetitle title={translations.vacancy.title}></Linetitle>

            <ul className="vacancy-content" dangerouslySetInnerHTML={{ __html: translations.vacancy.sub_title }} />

            
            <section className="vacancy-employee maxWidth">
                <h1 className="sec-title">{translations.vacancy.items_title}</h1>
                <div className="items">
                    {translations.vacancy.items.map(item =>
                        <div className="item">
                            <h1 key={item.id}>
                                {item.title}
                            </h1>
                            <p>{item.description}</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
