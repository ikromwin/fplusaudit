
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
              <div className="bg-[#eee] w-[150px] min-w-[150px] h-[150px] rounded-lg  bg-[#eee] p-2">
                <div className="overflow-hidden bg-[#eee] h-full w-full flex justify-center items-center rounded-lg">
                  <ImageLoad imgSrc={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
                </div>
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
              <div className="flex-[0_0_200px] lg:flex-[0_0_300px] sm:flex-[0_0_200px] h-[150px] sm:h-[150px] lg:h-[250px] rounded-lg flex justify-center items-center ml-2.5 bg-[#eee]" key={index}>
                <ImageLoad imgSrc={image} alt={"Achievement"} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </SliderTrack>
        </div>
      </section>

    </div>
  );
}
