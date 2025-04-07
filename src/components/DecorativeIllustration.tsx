"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const DecorativeIllustration = () => {
  return (
    <div className="absolute bottom-0 right-0 md:right-10 overflow-hidden">
      <motion.div
        initial={{ y: 140 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        <Image
          src="/my-body.png"
          alt="Small decorative illustration"
          width={100}
          height={100}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};
