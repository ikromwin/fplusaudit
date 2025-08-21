import { Link } from "react-router-dom";
import Linetitle from "../../components/LineTitleComponent"
import { galleryData } from "../../i18n/galleryData.js";
import ImageLoad from "../../components/ImageLoad";



function GalleryPage({ translations, lang }) {



    return (
        <div className="maxWidth px-4">
            <Linetitle title={translations.gallery.title} />


            <div className="space-y-12 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 gap-y-12">
                {galleryData.map((collection) => (
                    <div key={collection.id} className="group">
                        <div className="grid gap-2 grid-cols-2 grid-rows-2 mb-2 bg-[#eee] p-2 rounded-2xl">
                            {collection.photos[0] && (
                                <div className="row-span-2 h-[210px] w-full bg-[#ddd] rounded-lg overflow-hidden flex justify-center items-center">
                                    <ImageLoad
                                        imgSrc={collection.photos[0]}
                                        imgAlt={`${collection.id} preview 0`}
                                        className="opacity-40 w-screen h-[210px] object-cover duration-300 easy transition-all rounded-lg"
                                    />
                                </div>
                            )}


                            {collection.photos[1] && (
                                <div className="h-[100px] w-full bg-[#ddd] rounded-lg overflow-hidden flex justify-center items-center">
                                    <ImageLoad
                                        imgSrc={collection.photos[1]}
                                        imgAlt={`${collection.id} preview 0`}
                                        className="w-full h-full object-cover opacity-40 duration-300 easy group-hover:opacity-100 transition-all rounded-lg"
                                    />
                                </div>
                            )}
                            {collection.photos[2] && (
                                <div className="h-[100px] w-full bg-[#ddd] rounded-lg overflow-hidden flex justify-center items-center">
                                    <ImageLoad
                                        imgSrc={collection.photos[2]}
                                        imgAlt={`${collection.id} preview 0`}
                                        className="w-full h-full object-cover opacity-80 duration-300 easy group-hover:opacity-100 transition-all rounded-lg"
                                    />
                                </div>
                            )}
                        </div>



                        <div className="flex justify-between items-center px-3  ">
                            <Link
                                to={`/about/gallery/${collection.id}`}
                            >
                                {/* <h2 className="md:text-lg text-md sm:text-md text-[#3c42c8] hover:underline mb-2">{collection[lang].title}</h2> */}
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
