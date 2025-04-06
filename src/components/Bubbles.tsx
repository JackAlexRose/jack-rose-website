"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  borderWidth: number;
  blur: number;
  zIndex: number;
}

export const Bubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Create initial bubbles with responsive sizes
    const initialBubbles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size:
        (isMobile ? Math.random() * 15 + 10 : Math.random() * 25 + 15) *
        (window.innerWidth / 100), // vw-based size
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
      borderWidth: isMobile ? Math.random() * 2 + 2 : Math.random() * 3 + 4, // Smaller borders on mobile
      blur: isMobile ? Math.random() * 4 + 3 : Math.random() * 8 + 5, // Less blur on mobile
      zIndex: 5,
    }));
    setBubbles(initialBubbles);
  }, [isMobile]); // Recreate bubbles when screen size changes

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[100]">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            borderStyle: "solid",
            borderColor: "rgb(0, 0, 0)",
            borderWidth: bubble.borderWidth,
            backdropFilter: `blur(${bubble.blur}px)`,
            WebkitBackdropFilter: `blur(${bubble.blur}px)`,
            backgroundColor: "rgba(255, 255, 255, 0.01)",
            zIndex: bubble.zIndex,
          }}
          initial={{ y: "120vh" }}
          animate={{
            y: "-120vh",
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
        />
      ))}
    </div>
  );
};
