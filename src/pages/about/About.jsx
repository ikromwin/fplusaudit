import ImageTabs from "../../components/ImageTabs";
import Linetitle from "../../components/LineTitleComponent";


const achienvementsData = [1, 2, 3, 4, 5, 6, 7, 8, 9]


export default function About({ translations }) {
  const t = translations
  const content = t.about_content


  return (
    <div className="page__aboutUs maxWidth">
      <Linetitle title={t.about}></Linetitle>

      <p className="aboutUs-content" dangerouslySetInnerHTML={{ __html: content.aboutContent }} />



      <section className="aboutUs-employee maxWidth">
        <h1 className="sec-title">{content.employeeTitle}</h1>
        <div className="items">
          {content.employee.map(item =>
            <div className="item" key={item.id}>
              <div className="aboutUs-image">
                <img src={item.image} alt="" />
              </div>

              <div className="aboutUs-info">
                <h1>{item.name}</h1>
                <span>{item.jobTitle}</span>

                <p>{item.description}</p>
              </div>
            </div>
          )}

        </div>
      </section>

      <section className="aboutUs-employee maxWidth">
        <h1 className="sec-title">{t.teamImages}</h1>
        <div className="items">
          <ImageTabs />
        </div>
      </section>

      <section className="about-images">
        <h2 className="sec-title maxWidth">{t.achienvementsImages}</h2>
        <div className="block maxWidth">
          <div className="slider">
            <div className="slider-track">
              {achienvementsData.map((_, index) => (
                <div className="item" key={index}>
                  <img src={`/data/achievements/ACHIVEMENTS_${index + 1}.jpg`} alt={`Partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
