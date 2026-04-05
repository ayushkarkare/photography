"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PhotoPrintProps {
  src: string;
  alt: string;
  /** Intrinsic image dimensions (any consistent scale); set aspect ratio of the frame */
  width: number;
  height: number;
  rotation?: number;
  className?: string;
  priority?: boolean;
  /** Passed to next/image; should match real layout width in CSS (breakpoints). */
  sizes?: string;
  loading?: "eager" | "lazy";
}

const defaultSizes =
  "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw";

export default function PhotoPrint({
  src,
  alt,
  width,
  height,
  rotation = 0,
  className = "",
  priority = false,
  sizes = defaultSizes,
  loading,
}: PhotoPrintProps) {
  const loadMode = priority ? "eager" : loading ?? "lazy";

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
      <div
        className="relative w-full overflow-hidden bg-neutral-800"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          loading={loadMode}
          sizes={sizes}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAABAgMRIf/aAAwDAQACEQMRAD8Ay3T9Rv8AT7aWG0vLi3ikIMiRSsgYj4cA9j7qn/cGu/s3f9P/2Q=="
        />
      </div>
    </motion.div>
  );
}
