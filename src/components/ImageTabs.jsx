import { useState } from "react";
import imageData from "../../public/data/images.json";
import "./ImageTabs.css";

export default function ImageTabs() {
    const categories = Object.keys(imageData);
    const [activeTab, setActiveTab] = useState(categories[0]);

    return (
        <div className="image-tabs">
            <div className="tabs">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={category === activeTab ? "active" : ""}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="images">
                {imageData[activeTab].map((img, index) => (
                    <div className="image-card" key={index}>
                        <img src={`${img.src}`} alt={img.title} />
                        <p>{img.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
