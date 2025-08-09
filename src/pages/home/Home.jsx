import { useRef, useState, useEffect } from "react";
import Banner from "../../assets/Banner.png";
import Thumbnail from "../../assets/thumbnail.jpg";
import Video from "../../assets/video.mp4";
import { useLanguage } from "../../context/languageContext.jsx";

import Dove from "../../assets/Dove.png";
import Scales from "../../assets/Scales.png";
import Security from "../../assets/Security.png";
import Learning from "../../assets/Learning.png";

import P1 from "../../assets/partners/p1.png";
import P2 from "../../assets/partners/p2.png";
import P3 from "../../assets/partners/p3.png";
import P4 from "../../assets/partners/p4.png";
import P5 from "../../assets/partners/p5.png";
import P6 from "../../assets/partners/p6.png";
import P7 from "../../assets/partners/p7.png";
import P8 from "../../assets/partners/p8.png";
import P9 from "../../assets/partners/p9.png";
import P10 from "../../assets/partners/p10.png";
import P11 from "../../assets/partners/p11.png";
import P12 from "../../assets/partners/p12.png";
import P13 from "../../assets/partners/p13.png";
import P14 from "../../assets/partners/p14.png";
import P15 from "../../assets/partners/p15.png";
import P16 from "../../assets/partners/p16.png";
import P17 from "../../assets/partners/p17.png";
import P18 from "../../assets/partners/p18.png";
import P19 from "../../assets/partners/p19.png";
import P20 from "../../assets/partners/p20.png";
import P21 from "../../assets/partners/p21.png";
import P22 from "../../assets/partners/p22.png";
import P23 from "../../assets/partners/p23.png";
import P24 from "../../assets/partners/p24.png";

const PARTNER_LOGOS = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P20, P21, P22, P23, P24];

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Home({ translations }) {
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
      <div className="hero">
        <div className="maxWidth">
          <h1 className="hero-text">{content.heroText || <ErrorContent />}</h1>
        </div>
        <div className="hero-image">
          <img src={Banner} alt="Home Page Hero Banner | Signle" />
        </div>
      </div>


      {/* 
        ================================================
        ================= HERO SECTION =================
        ================================================
      */}
      <div className="hero-about">
        <div className="items">
          {content.heroAbout ? content.heroAbout?.map((item, index) => (
            <div className="item" key={index}>
              <h2>{item.title}</h2>
              
              <p><CountUp key={index} end={parseInt(item.num)} duration={2} /></p>
            </div>
          )) : <ErrorContent />}
        </div>
      </div>



      {/* 
        ================================================
        ================= ABOUT SECTION ================
        ================================================
      */}
      <section className="home-about maxWidth">
        <h2 className="sec-title">{content.aboutTitle || <ErrorContent />}</h2>
        <div className="block">
          <div className="hero-about-text">
            {content.aboutText ? <p dangerouslySetInnerHTML={{ __html: content.aboutText }} /> : <ErrorContent />}
          </div>
          <div className="hero-about-video">
            <div className="play" onClick={handlePlayClick} style={{ cursor: "pointer" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Zm80-207Zm0 134 210-134-210-134v268Z"></path></svg>
            </div>
            <div className="video-thumb" onClick={handlePlayClick} style={{ cursor: "pointer" }}>
              <img src={Thumbnail} alt="Video Thumbnail" width={400} />
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
        <h2 className="sec-title maxWidth">{content.companyTitle || <ErrorContent />}</h2>
        <div className="block">
          <div className="maxWidth">
            <ul>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[0] || <ErrorContent />} src={Dove} />
                </div>
                <p className="principles-txt">{content.companyPrinciples[0] || <ErrorContent />}</p>
              </li>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[1] || <ErrorContent />} src={Scales} />
                </div><p className="principles-txt">{content.companyPrinciples[1] || <ErrorContent />}</p>
              </li>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[2] || <ErrorContent />} src={Learning} />
                </div>
                <p className="principles-txt">{content.companyPrinciples[2] || <ErrorContent />}</p>
              </li>
              <li>
                <div className="list">
                  <img alt={content.companyPrinciples[3] || <ErrorContent />} src={Security} />
                </div>
                <p className="principles-txt">{content.companyPrinciples[3] || <ErrorContent />}</p>
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
      <section className="home-partners">
        <h2 className="sec-title maxWidth">{content.partnerTitle || <ErrorContent />}</h2>
        <div className="block maxWidth">
          <div className="slider">
            <div className="slider-track">
              {logos1.map((logo, index) => (
                <div className="item" key={index}>
                  <img src={logo} alt={`Partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="slider">
            <div className="slider-track">
              {logos2.map((logo, index) => (
                <div className="item" key={index}>
                  <img src={logo} alt={`Partner ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* 
        ================================================
        ================ NEWS SECTION ==================
        ================================================
      */}
      <section className="news maxWidth">
        <h2 className="sec-title maxWidth">{content.newsTitle || <ErrorContent />}</h2>

        <div className="news-component">
          <div className="items">
            {data.news && data.news.length > 0 ? data.news.map((newsItem, index) => (
              <NewsCard
                key={index}
                imgSrc={newsItem.image || Thumbnail}
                title={newsItem.title || "No title available"}
                date={newsItem.date || "No date available"}
                href={`/news/${newsItem.id}`}
              />
            )) : <ErrorContent />}
          </div>
        </div>

      </section>



    </main>
  );
}
