"use client";

import { motion } from "framer-motion";
import PhotoPrint from "./PhotoPrint";

interface WorkItem {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const workItems: WorkItem[] = [
  { id: 1, src: "/work/DSC03328.jpg", alt: "Portrait session", width: 400, height: 500 },
  { id: 2, src: "/work/DSC03444.jpg", alt: "Creative portrait", width: 400, height: 500 },
  { id: 3, src: "/work/DSC03594.jpg", alt: "Portrait photography", width: 400, height: 500 },
  { id: 4, src: "/work/DSC03641.jpg", alt: "Portrait session", width: 400, height: 500 },
  { id: 5, src: "/work/DSC03681.jpg", alt: "Creative shoot", width: 400, height: 500 },
  { id: 6, src: "/work/DSC03697.jpg", alt: "Portrait", width: 400, height: 500 },
  { id: 7, src: "/work/DSC03808.jpg", alt: "Student organization", width: 400, height: 500 },
  { id: 8, src: "/work/DSC03847.jpg", alt: "Event coverage", width: 400, height: 500 },
  { id: 9, src: "/work/_DSF1983.jpg", alt: "Creative project", width: 400, height: 500 },
  { id: 10, src: "/work/eba6ca40-9dab-49e1-ba3c-34cf04d746b2.jpg", alt: "Graduation portrait", width: 400, height: 500 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Selected Work
          </h2>
          <p className="text-cream/70 text-lg max-w-xl">
            A collection of portraits, events, and creative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="break-inside-avoid"
            >
              <PhotoPrint
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                rotation={(index % 3 - 1) * 0.5}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
