"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export function SelectedWork() {
  return (
    <section id="work" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Projects That{" "}
            <span className="text-gradient">Moved the Needle</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Not just features shipped — real business outcomes measured in time saved, errors eliminated, and revenue protected.
          </p>
        </motion.div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`badge border ${project.industryColor}`}
                      >
                        {project.industry}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                        <TrendingUp size={12} />
                        {project.highlight}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    {"company" in project && (
                      <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                        {project.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Problem */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-red-500/60" />
                      The Problem
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-indigo-500/60" />
                      What Was Built
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-4 flex items-center gap-2">
                    <Zap size={12} className="text-yellow-400" />
                    Business Impact
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.impact.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/30"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
