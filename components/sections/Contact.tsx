"use client";

import { motion } from "framer-motion";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import { personal } from "@/lib/data";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    isPrimary: true,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    isPrimary: false,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "nguyễn-thắng-4927a9304",
    href: personal.linkedin,
    isPrimary: false,
    external: true,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: personal.location,
    href: undefined,
    isPrimary: false,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-xl mx-auto text-center">
        <motion.p variants={itemVariants} className="font-mono text-neon-cyan text-xs tracking-widest uppercase mb-2">
          &lt; Contact /&gt;
        </motion.p>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold gradient-text mb-3">
          Let&apos;s Work Together
        </motion.h2>
        <motion.p variants={itemVariants} className="text-body/60 mb-10 leading-relaxed">
          Open to backend developer opportunities and internships. Feel free to reach out!
        </motion.p>

        <motion.div variants={itemVariants} className="space-y-3">
          {contactLinks.map(({ icon: Icon, label, value, href, isPrimary, external }) => {
            const inner = (
              <div
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 text-left ${
                  isPrimary
                    ? "bg-neon-purple/10 border-neon-purple/40 hover:bg-neon-purple/20 hover:border-neon-purple text-white cursor-pointer"
                    : href
                    ? "bg-surface border-border hover:border-neon-purple/50 cursor-pointer"
                    : "bg-surface border-border"
                }`}
              >
                <Icon
                  className={isPrimary ? "text-neon-purple" : "text-neon-cyan"}
                  size={18}
                />
                <div>
                  <p className="text-xs text-muted font-mono">{label}</p>
                  <p className={`text-sm font-medium ${isPrimary ? "text-neon-purple" : "text-body"}`}>
                    {value}
                  </p>
                </div>
              </div>
            );

            if (!href) return <div key={label}>{inner}</div>;

            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {inner}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-16 pt-8 border-t border-border text-xs text-muted font-mono"
      >
        Built with Next.js &amp; Framer Motion · Nguyen Duc Thang · 2026
      </motion.div>
    </SectionWrapper>
  );
}
