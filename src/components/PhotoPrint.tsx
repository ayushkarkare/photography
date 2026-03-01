"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoPrintProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  rotation?: number;
  className?: string;
  priority?: boolean;
}

export default function PhotoPrint({
  src,
  alt,
  width,
  height,
  rotation = 0,
  className = "",
  priority = false,
}: PhotoPrintProps) {
  return (
    <motion.div
      className={`photo-print ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative overflow-hidden bg-neutral-800">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8Ay3T9Rv8AT7aWG0vLi3ikIMiRSsgYj4cA9j7qn/cGu/s3f9P/2Q=="
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  );
}
