import { Link, useParams } from "react-router-dom";
import Masonry from "react-masonry-css";

import { galleryData } from "../../i18n/galleryData.js";
import Linetitle from "../../components/LineTitleComponent.jsx";
import { ArrowLeft } from "lucide-react";


function GalleryDetailPage({ translations, lang }) {
    const { id } = useParams();
    const collection = galleryData.find((c) => c.id === id);

    if (!collection) {
        return <p className="p-6 text-red-500">Collection not found.</p>;
    }
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        700: 3,
        500: 2,
    };

    return (
        <div className="px-4 maxWidth">
            <Linetitle title={collection[lang].title} />
            <div className="mb-8 bg-[#eee] p-3 px-4">
                <p className="text-md text-[#696969]">{collection[lang].description}</p>
            </div>

            <Link to={"/about/gallery/"} className="inline-flex items-center mb-8 text-[#ccc] active:scale-95  font-semibold text-sm gap-2 hover:text-[#3c42c8]">
                <ArrowLeft size={18} strokeWidth={1.5} />
                <span>{translations.buttons.return_button}</span>
            </Link>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid mt-8"
                columnClassName="my-masonry-grid_column"
            >
                {collection.photos.map((photo, i) => (
                    <img src={photo} alt={`Photo ${i}`} key={i} className="mb-4 rounded-lg" loading="lazy" />
                ))}
            </Masonry>

        </div>
    );
}

export default GalleryDetailPage;