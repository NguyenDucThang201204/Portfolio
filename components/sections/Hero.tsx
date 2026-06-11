"use client";

import { motion, type Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FiArrowDown, FiMail } from "react-icons/fi";
import { personal } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_#7c3aed25,_transparent)]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(to right, #a855f7 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-neon-cyan text-sm mb-3 tracking-widest uppercase"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold leading-tight gradient-text mb-3"
        >
          {personal.name}
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl font-mono text-body/80 mb-4 h-8"
        >
          <TypeAnimation
            sequence={[
              "Backend Developer.",
              2000,
              "ASP.NET Core Enthusiast.",
              2000,
              "C# Developer.",
              2000,
              "Problem Solver.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-body/60 text-base md:text-lg max-w-md mb-8 leading-relaxed"
        >
          Building scalable APIs and backend systems with ASP.NET Core & C#.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer px-6 py-2.5 rounded-full bg-neon-purple text-white text-sm font-semibold hover:bg-neon-purple/80 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_#a855f740]"
          >
            View Projects
          </Link>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-neon-cyan text-neon-cyan text-sm font-semibold hover:bg-neon-cyan/10 hover:scale-105 transition-all duration-200"
          >
            <FiMail size={14} />
            Contact Me
          </a>
          <Link
            to="about"
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer px-6 py-2.5 rounded-full border border-border text-body/70 text-sm font-semibold hover:border-neon-purple/50 hover:text-neon-purple transition-all duration-200"
          >
            About Me
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-neon-purple" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
