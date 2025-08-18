import { useRef, useState, useEffect } from "react";



// CONTEXT
import { useLanguage } from "../context/languageContext.jsx";


// THIDR PARTY
import CountUp from 'react-countup';
import { Play } from "lucide-react";


// CPOMPONENTS
import ImageLoad from "../components/ImageLoad.jsx"
import SliderTrack from "../components/SliderTrack.jsx";



// IMAGE IMPORTS
import Thumbnail from "../assets/thumbnail.jpg";
import Banner from "../assets/Banner.png";
// ======= PRINCIPLES ICONS (4) =======
import Dove from "../assets/principles/Dove.png";
import Scales from "../assets/principles/Scales.png";
import Security from "../assets/principles/Security.png";
import Learning from "../assets/principles/Learning.png";
// ======= MP4 =======
import Video from "../assets/video.mp4";





import P1 from "../assets/partners/p1.png";
import P2 from "../assets/partners/p2.png";
import P3 from "../assets/partners/p3.png";
import P4 from "../assets/partners/p4.png";
import P5 from "../assets/partners/p5.png";
import P6 from "../assets/partners/p6.png";
import P7 from "../assets/partners/p7.png";
import P8 from "../assets/partners/p8.png";
import P9 from "../assets/partners/p9.png";
import P10 from "../assets/partners/p10.png";
import P11 from "../assets/partners/p11.png";
import P12 from "../assets/partners/p12.png";
import P13 from "../assets/partners/p13.png";
import P14 from "../assets/partners/p14.png";
import P15 from "../assets/partners/p15.png";
import P16 from "../assets/partners/p16.png";
import P17 from "../assets/partners/p17.png";
import P18 from "../assets/partners/p18.png";
import P19 from "../assets/partners/p19.png";
import P20 from "../assets/partners/p20.png";
import P21 from "../assets/partners/p21.png";
import P22 from "../assets/partners/p22.png";
import P23 from "../assets/partners/p23.png";
import P24 from "../assets/partners/p24.png";
import NewsCard from "../components/NewsCard.jsx";

const PARTNER_LOGOS = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24];

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


export default function HomePage({ translations }) {
  const { data } = useLanguage();

  const t = translations || {};
  const content = t.home_content || {};
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const [logos1, setLogos1] = useState(shuffleArray(PARTNER_LOGOS));
  const [logos2, setLogos2] = useState(shuffleArray(PARTNER_LOGOS));

  const handlePlayClick = () => {
    setShowModal(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowModal(false);
  };


  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  useEffect(() => {
    // Shuffle logos every time the component mounts
    setLogos1(shuffleArray(PARTNER_LOGOS));
    setLogos2(shuffleArray(PARTNER_LOGOS));
  }, []);

  return (
    <main>
      <div className="relative w-full px-4 py-0 after:content-[''] after:absolute after:w-full after:h-full after:bg-[color:var(--overlay-background)] after:left-0 after:top-0
        h-[60vh]
        lg:h-[50vh]
        sm:h-[60vh]
      ">
        <div className="maxWidth">
          <h1 className="absolute font-black uppercase z-[1] max-w-[800px] text-[color:var(--light)] leading-[4rem] -translate-y-2/4 top-[48%]
            text-[1.4rem]
            lg:text-[2rem]
            sm:text-[1.4rem]
          ">
            {content.heroText || null}
          </h1>
        </div>


        <div>
          <img
            src={Banner}
            alt="Hero Banner"
            className="absolute w-full h-full object-cover flex justify-center items-center select-none right-0 bottom-0"
          />
        </div>
      </div>


      {/* 
        ================================================
        ================= HERO SECTION =================
        ================================================
      */}
      <div className="translate-y-0 lg:translate-y-[-30%] max-w-[800px] w-full z-[2] mx-auto my-0 p-4">
        <div className="w-full flex justify-between items-center flex-col gap-4
          sm:flex sm:flex-col
          lg:flex lg:flex-row
        ">

          {content.heroAbout ? content.heroAbout?.map((item, index) => (
            <div key={index} className="flex-col h-[120px] w-full border border-[#eee] rounded shadow-[0_0_30px_#3b3d3f10] flex justify-center items-center transition-[background-color] duration-[var(--trans)] px-8 py-4 border-solid bg-white">

              <h2 className="text-[1.1rem] text-center uppercase text-[color:var(--light-medium)] font-extralight mb-[15px]">{item.title}</h2>

              <p className="text-[1.1rem] uppercase text-[color:var(--main)] font-black"><CountUp key={index} end={parseInt(item.num)} duration={2} /></p>
            </div>

          )) : null}
        </div>
      </div>



      {/* 
        ================================================
        ================= ABOUT SECTION ================
        ================================================
      */}
      <section className="mt-16 px-4 py-0 maxWidth">
        <h2 className="sec-title">{content.aboutTitle || null}</h2>
        <div className="flex gap-8 justify-between
              flex-col
              lg:flex-row lg:gap-4
              sm:flex-col sm:gap-8
          ">
          <div>
            {content.aboutText ? <p
              className="max-w-[650px] font-light text-[color:var(--txt-light)] text-base leading-[var(--txt-space)]"
              dangerouslySetInnerHTML={{ __html: content.aboutText }} /> : null}
          </div>
          <div className="relative after:content-[''] after:absolute after:w-full after:h-full after:bg-[color:var(--overlay-background)] after:opacity-60 after:rounded-[20px] after:left-0 after:top-0
            w-full h-[250px]
            lg:w-[400px] lg:h-[250px]
            sm:w-full sm:h-[250px]
          ">

            <div
              className="absolute cursor-pointer -translate-x-2/4 -translate-y-2/4 w-[70px] h-[70px] bg-[color:var(--main)] flex justify-center items-center z-[1] cursor-pointer transition-[0.3s] duration-[150ms] rounded-[25px] left-2/4 top-2/4 hover:-translate-x-2/4 hover:-translate-y-2/4 hover:scale-95 select-none"
              onClick={handlePlayClick}
            >
              <Play className="opacity-80" size={16} color="#fff" />
            </div>

            <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
              <img src={Thumbnail} alt="Video Thumbnail" className="h-[250px] w-full object-cover select-none rounded-[20px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 
        ================================================
        =============== SHOW VIDEO MODAL ===============
        ================================================
      */}
      {showModal && (
        <div className="modal-overlay" style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div className="modal-content" style={{
            position: "relative",
            background: "#fff",
            borderRadius: "10px",
            padding: "2rem",
            boxShadow: "0 0 40px #0005",
            maxWidth: "700px",
            width: "90%"
          }}>
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "2rem",
                color: "#333",
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <video
              ref={videoRef}
              controls
              controlsList="nodownload noremoteplayback noplaybackrate"
              disablePictureInPicture
              style={{ width: "100%", borderRadius: "8px" }}
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}



      {/* 
        ================================================
        ============== PRINCIPLES SECTION ==============
        ================================================
      */}

      <section className="home-principles">
        <h2 className="sec-title maxWidth">{content.companyTitle || null}</h2>
        <div className="block">
          <div className="maxWidth">
            <ul>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[0] || null} src={Dove} />
                </div>
                <p className="principles-txt">{content.companyPrinciples[0] || null}</p>
              </li>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[1] || null} src={Scales} />
                </div><p className="principles-txt">{content.companyPrinciples[1] || null}</p>
              </li>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[2] || null} src={Learning} />
                </div>
                <p className="principles-txt">{content.companyPrinciples[2] || null}</p>
              </li>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[3] || null} src={Security} />
                </div>
                <p className="principles-txt">{content.companyPrinciples[3] || null}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* 
        ================================================
        =============== PARTNERS SECTION ===============
        ================================================
      */}
      <section className="maxWidth px-4">
        <h2 className="sec-title">{content.partnerTitle || null}</h2>
        <div className="grid gap-4">

          <SliderTrack speed={80}>
            {logos1.map((logo, index) => (
              <div className="w-[150px] sm:w-[150px] lg:w-[200px]" key={index}>
                <ImageLoad imgSrc={logo} imgAlt={index + 1}/>
              </div>
            ))}
          </SliderTrack>

          <SliderTrack reverse={true} speed={80}>
            {logos1.map((logo, index) => (
              <div className="w-[150px] sm:w-[150px] lg:w-[200px]" key={index}>
                <ImageLoad imgSrc={logo} imgAlt={index + 1} />
              </div>
            ))}
          </SliderTrack>
        </div>
      </section>



      {/* 
        ================================================
        ================ NEWS SECTION ==================
        ================================================
      */}
      <section className="news maxWidth">
        <h2 className="sec-title maxWidth">{content.newsTitle || null}</h2>

        <div className="news-component">
          <div className="items">
            {data.news && data.news.length > 0 ? data.news.map((newsItem, index) => (
              <>
                <NewsCard
                  key={index}
                  imgSrc={newsItem.image || Thumbnail}
                  title={newsItem.title || "No data"}
                  date={newsItem.date || "No date"}
                  href={`/news/${newsItem.id}`}
                />
              </>
            )) : null}
          </div>
        </div>

      </section>



    </main>
  );
}
