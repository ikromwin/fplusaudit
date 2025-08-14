import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useLanguage } from "./context/languageContext";
import { AnimatePresence, motion } from "framer-motion";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



// PAGES
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AboutDetails from "./pages/about/AboutDetails";
import Services from "./pages/services/Services";
import NewsList from './pages/news/NewsList';
import NewsDetails from './pages/news/NewsDetails';
import Contact from './pages/contact/Contact';
import Vacancy from './pages/vacancy/Vacancy';
import GalleryPage from "./pages/gallery/GalleryPage";




// ...existing code...

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
                                path="/about/gallery"
                                element={<GalleryPage translations={content} />}
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