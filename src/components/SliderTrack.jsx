import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SliderTrack({ children, reverse = false, speed = 100 }) {
    const controls = useAnimation();

    const startAnimation = () => {
        controls.start({
            x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: speed,
            },
        });
    };

    useEffect(() => {
        startAnimation();
    }, [reverse, speed]);

    return (
        <div
            className="slider overflow-hidden relative w-full"
            onMouseEnter={() => controls.stop()}
            onMouseLeave={startAnimation}
        >
            <motion.div className="flex w-max" animate={controls}>
                {children}
            </motion.div>
        </div>
    );
};
