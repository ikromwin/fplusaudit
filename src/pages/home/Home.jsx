import Banner from "../../assets/banner.png";

export default function Home({ translations }) {
  const t = translations || {};

  const content = t.home_content || {};

  return (
    <main>
      <section className="hero">
        <div className="maxWidth">
          <h1 className="hero-text">{content.heroText || "Loading..."}</h1>
        </div>
        <div className="hero-image">
          <img src={Banner} alt="Banner" />
        </div>
      </section>
    </main>
  );
}
