// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import education from "../constants/education";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

const Education = () => {
  return (
    <motion.section
      id="education"
      className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 text-white"
      variants={staggerContainer(0.3, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2
        className="text-6xl font-bold mb-12 text-left"
        variants={textVariant(0.2)}
      >
        Education...
      </motion.h2>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-purple-500 pl-6 relative group"
            variants={fadeIn("left", "spring", index * 0.3, 0.75)}
          >
            <span className="absolute -left-3 top-1 w-6 h-6 bg-purple-600 rounded-full group-hover:scale-110 transition-transform"></span>
            <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
            <p className="text-purple-400 font-medium">{edu.institution}</p>
            <p className="text-sm italic text-gray-400">{edu.duration}</p>
            <p className="text-sm text-gray-300">{edu.grade}</p>
            <p className="text-sm mt-2 text-white leading-relaxed">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
