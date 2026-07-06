"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import { CANDIDATE } from "@/lib/data";

const techBadges = [".NET 8", "Angular", "React", "C#", "SQL Server", "Clean Architecture", "CQRS"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
        aria-hidden="true"
      />
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 container-max section-padding pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
              <span className="glow-dot" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6"
          >
            Full-Stack Engineer
            <br />
            <span className="text-gradient">Building Scalable</span>
            <br />
            Enterprise Systems
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8"
          >
            {CANDIDATE.subTagline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm mb-10"
          >
            <MapPin size={14} className="text-indigo-500 dark:text-indigo-400" />
            <span>{CANDIDATE.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#work" className="btn-primary text-sm px-7 py-3.5 group">
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary text-sm px-7 py-3.5">
              Let&apos;s Talk
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-xs text-slate-400 dark:text-slate-600 flex items-center mr-2">Core stack:</span>
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-400"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          </div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="hidden lg:flex flex-shrink-0 relative items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Casual blob glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-pink-500/10 blur-2xl scale-110" />
              {/* Rotated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1.5 rotate-3">
                <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-950 p-1">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/profile-pic.png"
                      alt={CANDIDATE.name}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>
              {/* Floating decorative dots */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30"
              />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-purple-500/20 border border-purple-500/30"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
