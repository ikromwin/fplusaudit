import ReactDOM from "react-dom/client";

// STYLES
import './app.css';
import "./styles/_reset.css";
import "./styles/_global.css";
import "./styles/media.css";
import "./styles/ImageTabs.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
