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
    const initialBubbles = Array.from({ length: 7 }, (_, i) => ({
      id: i,
      size:
        (isMobile ? Math.random() * 15 + 10 : Math.random() * 20 + 5) *
        (window.innerWidth / 100), // vw-based size
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
      borderWidth: isMobile ? Math.random() * 2 + 2 : Math.random() * 3 + 4, // Smaller borders on mobile
      blur: isMobile ? Math.random() * 4 + 3 : Math.random() * 8 + 5, // Less blur on mobile
    }));
    setBubbles(initialBubbles);
  }, [isMobile]); // Recreate bubbles when screen size changes

  return (
    <div className="inset-0 pointer-events-none overflow-hidden z-[100]">
      {bubbles.map((bubble, index) => (
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
          }}
          initial={{ y: "100vh", x: 0 }}
          animate={{
            y: "-120vh",
            x: [0, 50, -50, 0], // This creates the weaving motion
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeOut",
            delay: index < 3 ? 0 : bubble.delay,
            x: {
              duration: bubble.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </div>
  );
};
