import { useEffect, useRef, useState } from "react";


// THIRD PARTY
import { Loader } from "lucide-react";


export default function ImageLoad({ imgSrc, imgAlt, w, h }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={imgRef}
            className={`relative w-[${w}] h-[${h}] flex items-center justify-center`}
        >

            {
                isVisible ?
                    <>
                        {!imgLoaded && <Loader className="animate-spin" color="#999999" strokeWidth={2.25} />}
                        <img
                            className={`transition-opacity object-cover duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                            src={imgSrc}
                            alt={imgAlt}
                            width="100%"
                            onLoad={() => setImgLoaded(true)}
                            onError={() => setImgLoaded(true)}
                        />
                    </>
                    :
                    <Loader className="animate-spin" color="#999999" strokeWidth={2.25} />
            }
        </div>
    )
}