
import Linetitle from "../components/LineTitleComponent";
import ImageLoad from "../components/ImageLoad";
import SliderTrack from "../components/SliderTrack";


const images = import.meta.glob("/src/assets/achievements/*.{png,jpg,jpeg,gif,svg}", {
  eager: true,
  import: "default",
});
export default function About({ сontentе, translations }) {


  return (
    <div className="page__aboutUs maxWidth">
      <Linetitle title={translations.about.title}></Linetitle>

      <p className="aboutUs-content" dangerouslySetInnerHTML={{ __html: translations.about.description }} />



      <section className="aboutUs-employee maxWidth">
        <h1 className="sec-title">{translations.about.employees_title}</h1>
        <div className="items">
          {translations.about.employees.map(item =>
            <div className="item" key={item.id}>
              <div className="bg-[#eee] rounded-lg min-w-[150px] max-w-[150px] overflow-hidden flex items-center justify-center h-[150px] p-2">
                <ImageLoad imgSrc={item.image} alt={item.name} width={"100%"} height={"100%"} />
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



      <section className="about-images">
        <h2 className="sec-title maxWidth">{translations.about.achievements_title}</h2>
        <div className="block maxWidth">
          <SliderTrack speed={20} >
            {Object.values(images).map((image, index) => (
              <div className="flex-[0_0_300px] min-h-[150px] overflow-hidden rounded-lg p-1 ml-2.5 bg-[#eee]" key={index}>
                <ImageLoad imgSrc={image} alt={"Achievement"} />
              </div>
            ))}
          </SliderTrack>
        </div>
      </section>

    </div>
  );
}
