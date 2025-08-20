import { Link } from "react-router-dom";
import Linetitle from "../../components/LineTitleComponent"
import { galleryData } from "../../i18n/galleryData.js";

function GalleryPage({ translations, lang }) {



    return (
        <div className="maxWidth px-4">
            <Linetitle title={translations.gallery.title} />


            <div className="space-y-12 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 gap-y-12">
                {galleryData.map((collection) => (
                    <div key={collection.id} className="group">
                        <div className="grid gap-2 grid-cols-2 grid-rows-2 mb-2 bg-[#eee] p-2 rounded-2xl">
                            {collection.photos[0] && (
                                <div className="row-span-2 max-h-[210px] bg-[#040743] rounded-lg">
                                    <img
                                        src={collection.photos[0]}
                                        alt={`${collection.id} preview 0`}
                                        className="w-full h-full object-cover opacity-80 duration-300 easy group-hover:opacity-100 transition-all rounded-lg"
                                    />
                                </div>
                            )}


                            {collection.photos[1] && (
                                <div className="max-h-[100px] bg-[#040743] rounded-lg">
                                    <img
                                        src={collection.photos[1]}
                                        alt={`${collection.id} preview 1`}
                                        className="w-full h-full object-cover opacity-80 duration-300 easy group-hover:opacity-100 transition-all rounded-lg"
                                    />
                                </div>
                            )}
                            {collection.photos[2] && (
                                <div className="max-h-[100px] bg-[#040743] rounded-lg">
                                    <img
                                        src={collection.photos[2]}
                                        alt={`${collection.id} preview 2`}
                                        className="w-full h-full object-cover opacity-80 duration-300 easy group-hover:opacity-100 transition-all rounded-lg"
                                    />
                                </div>
                            )}
                        </div>



                        <div className="flex justify-between items-center px-3  ">
                            <Link
                                to={`/about/gallery/${collection.id}`}
                            >
                                <h2 className="md:text-lg text-md sm:text-md text-[#3c42c8] hover:underline mb-2">{collection[lang].title}</h2>
                                <p className="text-sm opacity-30">{translations.gallery.number_of_photos} ({collection.photos.length})</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default GalleryPage;
