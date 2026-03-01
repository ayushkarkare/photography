"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  items: string[];
  color: "yellow" | "pink" | "blue";
  rotation: number;
}

const services: Service[] = [
  {
    title: "Portrait Sessions",
    items: [
      "Grad portraits",
      "Personal branding",
      "Outfit changes",
      "Location guidance",
    ],
    color: "yellow",
    rotation: -1.5,
  },
  {
    title: "Groups & Organizations",
    items: [
      "Student org promo shoots",
      "Team photos",
      "Event coverage",
    ],
    color: "pink",
    rotation: 0.8,
  },
  {
    title: "Creative Projects",
    items: [
      "Concept shoots",
      "Editorial-style portraits",
      "Brand collaborations",
    ],
    color: "blue",
    rotation: -0.5,
  },
];

const colorClasses = {
  yellow: "bg-sticky-yellow",
  pink: "bg-sticky-pink",
  blue: "bg-sticky-blue",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-mat-dark/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Services
          </h2>
          <p className="text-cream/70 text-lg max-w-xl">
            Tailored photography for every need.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`sticky-note ${colorClasses[service.color]} text-mat`}
              style={{ transform: `rotate(${service.rotation}deg)` }}
            >
              <div className="flex flex-col h-full p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl mb-4 md:mb-6 font-bold">{service.title}</h3>
                <ul className="space-y-2 md:space-y-3 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 md:gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-mat/60 mt-1.5 md:mt-2 flex-shrink-0" />
                      <span className="text-mat font-semibold text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
