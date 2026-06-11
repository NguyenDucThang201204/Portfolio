"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import { awards } from "@/lib/data";
import { HiTrophy, HiStar } from "react-icons/hi2";

const tierConfig = {
  gold: {
    Icon: HiTrophy,
    iconColor: "text-yellow-400",
    borderColor: "hover:border-yellow-400/50",
    bgColor: "bg-yellow-400/5",
    label: "text-yellow-400",
  },
  silver: {
    Icon: HiStar,
    iconColor: "text-gray-300",
    borderColor: "hover:border-gray-300/50",
    bgColor: "bg-gray-300/5",
    label: "text-gray-300",
  },
  purple: {
    Icon: HiStar,
    iconColor: "text-neon-purple",
    borderColor: "hover:border-neon-purple/50",
    bgColor: "bg-neon-purple/5",
    label: "text-neon-purple",
  },
};

export default function Awards() {
  return (
    <SectionWrapper id="awards">
      <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
        &lt; Awards /&gt;
      </motion.p>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-10">
        Honors & Awards
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {awards.map((award, i) => {
          const { Icon, iconColor, borderColor, bgColor, label } = tierConfig[award.tier];
          return (
            <motion.div
              key={award.semester}
              variants={itemVariants}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 ${bgColor} bg-surface border border-border rounded-xl p-4 ${borderColor} transition-colors duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-bg flex items-center justify-center shrink-0 border border-border">
                <Icon className={iconColor} size={20} />
              </div>
              <div>
                <p className={`${label} font-semibold text-sm`}>{award.title}</p>
                <p className="text-muted text-xs font-mono mt-0.5">{award.semester}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
