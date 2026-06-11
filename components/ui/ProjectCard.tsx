"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";
import type { ProjectItem } from "@/lib/data";
import { FiUsers, FiLock } from "react-icons/fi";
import { MdCheckCircleOutline } from "react-icons/md";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-neon-purple/60 hover:shadow-[0_0_24px_#a855f740] transition-all duration-300"
    >
      {/* Header gradient strip */}
      <div className="relative h-28 bg-gradient-to-br from-neon-purple/20 via-neon-glow/10 to-neon-cyan/20 p-5 flex items-end">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#a855f730,_transparent_60%)]" />
        <div className="relative z-10 flex flex-wrap items-end justify-between w-full gap-2">
          <div>
            <h3 className="text-white text-xl font-bold">{project.name}</h3>
            <p className="text-body/70 text-xs mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 font-mono">
              {project.role}
            </span>
            <span className="text-xs text-muted font-mono">{project.period}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <p className="text-sm text-body/80 leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted font-mono">Key Features</p>
          {project.features.map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-body/80">
              <MdCheckCircleOutline className="text-neon-cyan mt-0.5 shrink-0 text-base" />
              <span>{f.label}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <FiUsers className="text-neon-purple" />
            <span>Team of {project.teamSize}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <FiLock className="text-neon-purple/60" />
            <span>Private Repository</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
