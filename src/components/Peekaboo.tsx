"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export const Peekaboo = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-0 right-0 md:right-10 overflow-hidden">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: shouldReduceMotion ? 0.3 : 2,
          ease: "easeOut",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? "/my-body-pixel.png" : "/my-body.png"}
          alt="Small decorative illustration"
          width={100}
          height={100}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};
