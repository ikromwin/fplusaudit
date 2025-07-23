import './app.css';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./context/languageContext";

// COMPONENTS
import Navbar from "./components/navbar";
import Footer from "./components/Footer";



// PAGES
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import NewsList from './pages/news/NewsList';
import Contact from './pages/contact/contact';




function App() {

    const { content } = useLanguage();


    return (
        <div className="App">

            {/* NAVBAR */}
            <Navbar />




            {/* CONTENT */}
            <Routes>
                <Route path="/" element={<Home translations={content} />} />
                <Route path="/about" element={<About translations={content} />} />
                <Route path="/services" element={<Services translations={content} />} />
                <Route path="/news" element={<NewsList translations={content} />} />
                <Route path="/contact" element={<Contact translations={content} />} />
            </Routes>





            {/* FOOTER */}
            <Footer translations={content}></Footer>
        </div>
    );
}

export default App;