import { Routes, Route, useLocation } from "react-router-dom";



// CONTEXTS
import { useLanguage } from "./context/languageContext";


// THIRD PARTY
import { AnimatePresence, motion } from "framer-motion";




// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



// PAGES
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AboutDetails from "./pages/AboutDetails";
import Services from "./pages/Services";
import NewsList from './pages/news/NewsList';
import NewsDetails from './pages/news/NewsDetails';
import Contact from './pages/Contact';
import Vacancy from './pages/Vacancy';
import GalleryPage from "./pages/gallery/GalleryPage";
import GalleryDetailPage from "./pages/gallery/GalleryDetailPage";





function App() {
    const { achievements, lang, translations } = useLanguage();
    const location = useLocation();

    return (
        <div className="App">
            <Header />

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
                                element={<HomePage translations={translations} />}
                            />
                            <Route
                                path="/about"
                                element={<About translations={translations} />}
                            />
                            <Route
                                path="/about/:id"
                                element={<AboutDetails translations={translations}   lang={lang} />}
                            />
                            <Route
                                path="/about/gallery/"
                                element={<GalleryPage translations={translations} lang={lang} />}
                            />
                            <Route
                                path="/about/gallery/:id"
                                element={<GalleryDetailPage translations={translations} lang={lang} />}
                            />
                            <Route
                                path="/services"
                                element={<Services translations={translations} />}
                            />
                            <Route
                                path="/news"
                                element={<NewsList translations={translations} />}
                            />
                            <Route
                                path="/news/:id"
                                element={<NewsDetails translations={translations} />}
                            />
                            <Route
                                path="/contact"
                                element={<Contact translations={translations} />}
                            />
                            <Route
                                path="/vacancy"
                                element={<Vacancy translations={translations} />}
                            />
                        </Routes>
                    </AnimatePresence>

                    <Footer translations={translations}></Footer>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default App;