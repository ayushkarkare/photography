"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 40 }: LogoProps) {
  const aspectRatio = 420 / 80;
  const width = height * aspectRatio;
  
  return (
    <Image
      src="/brand/akari_v1_horizontal.svg"
      alt="Akari Studios"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
