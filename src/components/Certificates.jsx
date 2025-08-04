import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certificates } from "../constants/certificates"; // adjust the path as needed
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


export const Certificates = () => {
  return (
    <section className="py-16 px-6" id="certificates">
      {/* <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
        📜 Certifications
      </h2> */}
       <h2 className={`${styles.sectionHeadText} text-center`}>
                Campus Achievements
              </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1f1f2e] p-6 rounded-xl shadow-lg hover:shadow-purple-500/50 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-[#915EFF] mb-2">
              {cert.title}
            </h3>
            <p className="text-white-100 text-sm mb-1">{cert.issuer}</p>
            <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
            {/* <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white font-medium inline-flex items-center hover:underline"
            >
              View Certificate <FaExternalLinkAlt className="ml-2 text-xs" />
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
