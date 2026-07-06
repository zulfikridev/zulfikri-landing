"use client";

import { motion } from "framer-motion";
import { STATS, INDUSTRIES } from "@/lib/data";

const techLogos = [
  { name: ".NET 8", color: "text-purple-400" },
  { name: "Angular", color: "text-red-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "SQL Server", color: "text-blue-400" },
  { name: "Azure DevOps", color: "text-sky-400" },
  { name: "Entity Framework", color: "text-indigo-400" },
  { name: "TypeScript", color: "text-yellow-400" },
  { name: "Clean Architecture", color: "text-emerald-400" },
  { name: "CQRS", color: "text-orange-400" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-slate-200/60 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden">
      {/* Stats row */}
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                <span className="text-gradient">{stat.value}</span>
                <span className="text-slate-500 dark:text-slate-400 text-xl">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <span className="text-xs text-slate-400 dark:text-slate-600 uppercase tracking-wider mr-2">
            Industries:
          </span>
          {INDUSTRIES.map((industry) => (
            <span
              key={industry.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 text-sm text-slate-700 dark:text-slate-300"
            >
              <span>{industry.icon}</span>
              {industry.name}
            </span>
          ))}
        </motion.div>

        {/* Scrolling tech strip */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 whitespace-nowrap w-max"
            >
              {[...techLogos, ...techLogos].map((tech, i) => (
                <span
                  key={`${tech.name}-${i}`}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/30 text-sm font-mono font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
