"use client";

import { motion } from "framer-motion";
import PhotoPrint from "./PhotoPrint";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <PhotoPrint
              src="/work/IMG_3316.jpg"
              alt="Ayush Karkare"
              width={3457}
              height={5184}
              rotation={-1}
              className="mx-auto lg:mx-0 max-w-md lg:max-w-none"
              sizes="(max-width: 1023px) 100vw, 45vw"
            />

            {/* Gear note sticky */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-sticky-yellow text-mat p-4 shadow-lg max-w-[180px]"
              style={{ transform: "rotate(3deg)" }}
            >
              <p className="text-xs font-medium">
                Currently shooting with a Sony a6700
              </p>
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
              About
            </h2>
            <div className="space-y-6 text-cream/80 text-lg leading-relaxed">
              <p>
                I&apos;m Ayush Karkare, a photographer focused on capturing genuine moments 
                with intention and a clean aesthetic.
              </p>
              <p>
                My work spans from graduation portraits and student organization coverage 
                to creative editorial projects. Whether it&apos;s a solo session or a full 
                team shoot, I bring the same level of care and attention to detail.
              </p>
              <p>
                I believe great photos come from collaboration. Understanding your vision, 
                planning the details, and creating an environment where you can be yourself 
                in front of the camera.
              </p>
            </div>
            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                Let&apos;s Work Together
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
