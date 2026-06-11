"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
        &lt; Skills /&gt;
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-10">
        Tech Stack
      </motion.h2>

      <div className="space-y-6">
        {skills.map((group) => (
          <motion.div key={group.group} variants={itemVariants} className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-muted font-mono">{group.group}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
