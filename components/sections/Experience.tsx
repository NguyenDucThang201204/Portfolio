"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
        &lt; Experience /&gt;
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-10">
        Work Experience
      </motion.h2>

      <div>
        {experience.map((item) => (
          <TimelineItem
            key={item.title + item.period}
            title={item.title}
            company={item.company}
            period={item.period}
            bullets={item.bullets}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
