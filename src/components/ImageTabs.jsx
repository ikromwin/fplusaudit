import { useLanguage } from "../context/languageContext";
import { useState } from "react";
import Masonry from "react-masonry-css";
import imageData from "../../public/data/images.json";


export default function ImageTabs() {
    const { lang } = useLanguage();
    const categories = Object.keys(imageData);
    const [activeTab, setActiveTab] = useState(categories[0]);

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2
    };
    console.log(activeTab);
    
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


            {imageData[activeTab].map((datas, index) => (
                <div className="image-tab" key={index}>
                    <div className="title">{datas.title[lang]}</div>

                    <Masonry
                        key={index}
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid "
                        columnClassName="my-masonry-grid_column">
                        {
                            datas.images.map((image, index) => (
                                <div className="image-card">
                                    <img src={`/data/team_images/T${activeTab}_${index + 1}.jpg`} alt={image.title} />
                                </div>
                            ))
                        }
                    </Masonry>
                </div>
            ))}
        </div>
    );
}
