import { useLocation } from "react-router-dom";
import { useLanguage } from "./context/languageContext";

// COMPONENTS

// PAGES -> --> ==>


function App() {
    const { content, lang } = useLanguage();
    const location = useLocation();

    return (
        <div className="App">

            {/* NAVBAR */}
            <Navbar />

            {/* CONTENT */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`${lang}-${location.pathname}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ScrollToTop />
                    <AnimatePresence mode="wait">
                        <Routes location={location} key={location.pathname}>
                            <Route
                                path="/"
                                element={<Home translations={content} />}
                            />
                            <Route
                                path="/about"
                                element={<About translations={content} />}
                            />
                            <Route
                                path="/about/:id"
                                element={<AboutDetails translations={content} lang={lang} />}
                            />
                            <Route
                                path="/services"
                                element={<Services translations={content} />}
                            />
                            <Route
                                path="/news"
                                element={<NewsList translations={content} />}
                            />
                            <Route
                                path="/news/:id"
                                element={<NewsDetails translations={content} />}
                            />
                            <Route
                                path="/contact"
                                element={<Contact translations={content} />}
                            />
                            <Route
                                path="/vacancy"
                                element={<Vacancy translations={content} />}
                            />
                        </Routes>
                    </AnimatePresence>

                    {/* FOOTER */}
                    <Footer translations={content}></Footer>


                </motion.div>
            </AnimatePresence>
        </div>
    );
}

//

export default App;