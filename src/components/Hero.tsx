"use client";

import { motion } from "framer-motion";
import PhotoPrint from "./PhotoPrint";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-6">
              Akari
              <br />
              Studios
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-8 max-w-md">
              Portraits, student orgs, and creative work.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn-secondary">
                Book a Shoot
              </a>
            </div>
          </motion.div>

          {/* Photo Prints */}
          <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 md:left-8 z-10"
            >
              <PhotoPrint
                src="/work/DSC03920.jpg"
                alt="Portrait photography sample"
                width={280}
                height={350}
                rotation={-2}
                className="w-48 md:w-64 lg:w-72"
                priority={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-20 md:top-16 right-0 md:right-8 z-20"
            >
              <PhotoPrint
                src="/work/04381d3d-399b-4d8c-87c3-8a3d94be3ca9.jpg"
                alt="Creative photography sample"
                width={260}
                height={340}
                rotation={3}
                className="w-44 md:w-56 lg:w-64"
                priority={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: -1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 left-1/4 z-30"
            >
              <PhotoPrint
                src="/work/DSC03958.jpg"
                alt="Student organization photography"
                width={240}
                height={300}
                rotation={-1}
                className="w-40 md:w-52 lg:w-60"
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
