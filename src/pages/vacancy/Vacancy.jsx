
export default function Vacancy({ translations }) {
    const t = translations
    const content = t.vacancy_content



    return (
        <div className="page__vacancy maxWidth">
            <Linetitle title={t.vacancy}></Linetitle>

            <ul className="vacancy-content" dangerouslySetInnerHTML={{ __html: content.subTitle }} />



            <section className="vacancy-employee maxWidth">
                <h1 className="sec-title">{content.itemsTitle}</h1>
                <div className="items">
                    {content.items.map(item =>
                        <div className="item" key={item.id}>
                            <h1>
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
