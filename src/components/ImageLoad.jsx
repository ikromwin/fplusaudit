import { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";

export default function ImageLoad({ imgSrc, imgAlt }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
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
            className="relative flex items-center justify-center w-full h-full rounded-lg"
        >
            {isVisible ? (
                <>
                    {!imgLoaded && (
                        <Loader className="animate-spin" color="#888" size={20} strokeWidth={2.25} />
                    )}
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        className={`transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        onLoad={() => setImgLoaded(true)}
                        onError={() => setImgLoaded(true)}
                    />
                </>
            ) : (
                <Loader className="animate-spin" color="#888" strokeWidth={2.25} size={20} />
            )}
        </div>
    );
}
