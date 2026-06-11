"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
        &lt; Projects /&gt;
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-10">
        Featured Projects
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className={
          projects.length === 1
            ? "max-w-2xl mx-auto"
            : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
