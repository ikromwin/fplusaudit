

export default function Home({ translations }) {
  const t = translations || {};

  return (
    <main>
      <h1>{t.welcome_text}</h1>
      <p>{t.home_content.description}</p>
    </main>
  );
}
