import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext";

// STYLES
import './app.css';
import "./styles/_reset.css";
import "./styles/_global.css";
import "./styles/components.css";
import "./styles/media.css";
import "./styles/ImageTabs.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
