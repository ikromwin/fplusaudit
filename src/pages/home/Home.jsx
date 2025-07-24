

export default function Home({ translations }) {
  const t = translations || {};

  const content = t.home_content || {};

  return (
    <main>
      <section className="hero">
        <h1>{content.heroText || "Loading..."}</h1>

        
      </section>
    </main>
  );
}
