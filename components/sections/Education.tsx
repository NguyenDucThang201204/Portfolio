"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import { education, certifications } from "@/lib/data";
import { FiExternalLink } from "react-icons/fi";
import { HiAcademicCap } from "react-icons/hi";

export default function Education() {
  const gpaPercent = (parseFloat(education.gpa) / parseFloat(education.gpaMax)) * 100;

  return (
    <SectionWrapper id="education">
      <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
        &lt; Education /&gt;
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-10">
        Education & Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Education card */}
        <motion.div
          variants={itemVariants}
          className="bg-surface border border-border rounded-xl p-6 hover:border-neon-purple/50 transition-colors duration-300"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-neon-purple/15 border border-neon-purple/30 flex items-center justify-center shrink-0">
              <HiAcademicCap className="text-neon-purple" size={22} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">{education.institution}</h3>
              <p className="text-body/70 text-sm mt-0.5">{education.degree}</p>
              <p className="text-muted text-xs font-mono mt-1">{education.period}</p>
            </div>
          </div>

          {/* GPA bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted font-mono text-xs">GPA</span>
              <span className="gradient-text font-bold">
                {education.gpa} / {education.gpaMax}
              </span>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan"
                initial={{ width: 0 }}
                whileInView={{ width: `${gpaPercent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants} className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-muted font-mono mb-4">Certifications</p>
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 bg-surface border border-border rounded-xl p-4 hover:border-neon-purple/50 transition-colors duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-1.5" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium group-hover:text-neon-purple transition-colors truncate">
                  {cert.name}
                </p>
                <p className="text-muted text-xs font-mono mt-0.5">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
              <FiExternalLink className="text-muted group-hover:text-neon-purple transition-colors shrink-0 mt-0.5" size={14} />
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
