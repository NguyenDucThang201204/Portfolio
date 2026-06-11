"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import { personal } from "@/lib/data";
import { FiMapPin, FiCalendar, FiBriefcase, FiCode } from "react-icons/fi";

const stats = [
  { icon: FiCode, value: "3.3 / 4.0", label: "GPA" },
  { icon: FiBriefcase, value: "6 months", label: "Industry Experience" },
  { icon: FiCode, value: "1 Major", label: "Project" },
  { icon: FiMapPin, value: "HCM City", label: "Location" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
        &lt; About /&gt;
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-10">
        Who Am I?
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: bio */}
        <motion.div variants={itemVariants} className="space-y-4 text-body/80 leading-relaxed text-base">
          <p>
            I&apos;m a Backend Developer fresher from{" "}
            <span className="text-neon-purple font-medium">FPT University</span>, graduating July
            2026 with a degree in Computer Software Engineering (GPA 3.3/4).
          </p>
          <p>
            I specialize in building RESTful APIs with{" "}
            <span className="text-neon-cyan font-medium">ASP.NET Core</span> and{" "}
            <span className="text-neon-cyan font-medium">C#</span>, with hands-on experience in
            PostgreSQL, Redis, Docker, and cloud deployment on DigitalOcean.
          </p>
          <p>
            During my internship at{" "}
            <span className="text-neon-purple font-medium">FPT Software</span>, I worked as both a
            Manual Tester and a Backend Developer, gaining real-world exposure to Agile workflows,
            unit testing with NUnit, and collaborative development using Jira.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted pt-2">
            <FiCalendar size={14} className="text-neon-purple" />
            <span>Born {personal.dob}</span>
            <span className="mx-1">·</span>
            <FiMapPin size={14} className="text-neon-purple" />
            <span>{personal.location}</span>
          </div>
        </motion.div>

        {/* Right: stat cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-surface border border-border rounded-xl p-4 hover:border-neon-purple/50 transition-colors duration-300"
            >
              <Icon className="text-neon-purple mb-2" size={18} />
              <p className="text-lg font-bold gradient-text">{value}</p>
              <p className="text-xs text-muted mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
