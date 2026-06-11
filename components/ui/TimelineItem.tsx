"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./SectionWrapper";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export default function TimelineItem({ title, company, period, bullets }: TimelineItemProps) {
  return (
    <motion.div variants={itemVariants} className="relative flex gap-6 pb-10 last:pb-0">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-neon-purple mt-1 shrink-0 ring-2 ring-neon-purple/30" />
        <div className="w-px flex-1 bg-gradient-to-b from-neon-purple/60 to-transparent mt-1" />
      </div>

      {/* Card */}
      <div className="flex-1 bg-surface border border-border rounded-xl p-5 hover:border-neon-purple/50 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-white font-semibold text-base">{title}</h3>
            <span className="text-xs font-mono text-neon-cyan mt-0.5 inline-block">{company}</span>
          </div>
          <span className="text-xs text-muted font-mono shrink-0">{period}</span>
        </div>
        <ul className="space-y-1.5">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-body/80 flex gap-2">
              <span className="text-neon-purple mt-1 shrink-0">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
