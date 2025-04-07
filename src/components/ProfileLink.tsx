"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function ProfileLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="/"
      className="font-medium flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? "/my-head2.png" : "/my-head.png"}
        alt="Jack Rose"
        width={32}
        height={32}
        className="mr-2"
        priority
      />
      Jack Rose
    </Link>
  );
}
