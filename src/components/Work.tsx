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

/** width/height = intrinsic pixels; keep in sync with files in public/work */
const workItems: WorkItem[] = [
  { id: 1, src: "/work/DSC03328.jpg", alt: "Portrait session", width: 1035, height: 1549 },
  { id: 2, src: "/work/DSC03444.jpg", alt: "Creative portrait", width: 5913, height: 3942 },
  { id: 3, src: "/work/DSC03594.jpg", alt: "Portrait photography", width: 5972, height: 3981 },
  { id: 4, src: "/work/DSC03641.jpg", alt: "Portrait session", width: 3470, height: 2313 },
  { id: 5, src: "/work/DSC03681.jpg", alt: "Creative shoot", width: 4092, height: 2728 },
  { id: 6, src: "/work/DSC03697.jpg", alt: "Portrait", width: 6065, height: 4043 },
  { id: 7, src: "/work/DSC03808.jpg", alt: "Student organization", width: 5284, height: 3523 },
  { id: 8, src: "/work/DSC03847.jpg", alt: "Event coverage", width: 4525, height: 3017 },
  { id: 9, src: "/work/_DSF1983.jpg", alt: "Creative project", width: 2304, height: 1536 },
  /* EXIF orientation 8: stored 1024×576, displayed as portrait */
  { id: 10, src: "/work/eba6ca40-9dab-49e1-ba3c-34cf04d746b2.jpg", alt: "Graduation portrait", width: 576, height: 1024 },
  { id: 11, src: "/work/DSC00428.jpg", alt: "Portrait session", width: 3000, height: 2000 },
  { id: 12, src: "/work/DSC00452.jpg", alt: "Creative portrait", width: 3000, height: 2000 },
  { id: 13, src: "/work/DSC00492.jpg", alt: "Event photography", width: 3000, height: 2000 },
  { id: 14, src: "/work/DSC00507.jpg", alt: "Portrait", width: 2000, height: 3000 },
  { id: 15, src: "/work/DSC00589.jpg", alt: "Creative shoot", width: 3000, height: 2000 },
  { id: 16, src: "/work/DSC00768.jpg", alt: "Portrait photography", width: 3000, height: 2000 },
  { id: 17, src: "/work/DSC01147.jpg", alt: "Student organization", width: 2000, height: 3000 },
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
          viewport={{ once: true, amount: 0.05 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          {workItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="break-inside-avoid mb-6"
            >
              <PhotoPrint
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                rotation={(index % 3 - 1) * 0.5}
                loading="eager"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
