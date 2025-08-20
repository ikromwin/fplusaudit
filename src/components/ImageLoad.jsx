import { useEffect, useRef, useState, useCallback } from "react";
import { Loader } from "lucide-react";

export default function ImageLoad({
    imgSrc,
    imgAlt = "",
    className = "",
    ...props
}) {
    const [loaded, setLoaded] = useState(false);
    const [visible, setVisible] = useState(false);
    const containerRef = useRef(null);

    const onLoad = useCallback(() => setLoaded(true), []);
    const onError = useCallback(() => setLoaded(true), []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="relative flex items-center justify-center">
            {visible && (
                <>
                    {!loaded && (
                        <Loader
                            className="absolute animate-spin text-gray-400"
                            size={20}
                            strokeWidth={2.25}
                        />
                    )}
                    <img
                        src={imgSrc}
                        alt={imgAlt}
                        loading="lazy"
                        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
                        onLoad={onLoad}
                        onError={onError}
                        {...props}
                    />
                </>
            )}
        </div>
    );
}
