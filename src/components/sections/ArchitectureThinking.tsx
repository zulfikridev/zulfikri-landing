"use client";

import { motion } from "framer-motion";
import { ARCHITECTURE_PRINCIPLES } from "@/lib/data";

export function ArchitectureThinking() {
  return (
    <section id="architecture" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">How I Think</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Architecture-First{" "}
            <span className="text-gradient">Engineering</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            I don&apos;t just write code — I design systems that are maintainable, testable, and built to survive business change.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {ARCHITECTURE_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl shrink-0">{principle.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {principle.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    <span className="text-xs text-indigo-600 dark:text-indigo-300 font-medium">
                      {principle.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 p-8 md:p-10"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-8 text-center">
            Clean Architecture — Dependency Flow
          </h3>

          <div className="flex flex-col items-center gap-0">
            {[
              {
                layer: "Presentation Layer",
                items: ["Angular SPA", "REST Controllers"],
                color: "border-blue-500/40 bg-blue-500/5 text-blue-600 dark:text-blue-300",
                width: "w-full max-w-sm",
              },
              {
                layer: "Application Layer",
                items: ["Commands / Queries", "MediatR Handlers", "DTOs"],
                color: "border-indigo-500/40 bg-indigo-500/5 text-indigo-600 dark:text-indigo-300",
                width: "w-full max-w-xs",
              },
              {
                layer: "Domain Layer",
                items: ["Entities", "Value Objects", "Domain Events"],
                color: "border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-300",
                width: "w-full max-w-[220px]",
              },
              {
                layer: "Infrastructure Layer",
                items: ["EF Core", "SQL Server", "External APIs"],
                color: "border-slate-300 dark:border-slate-500/40 bg-slate-100 dark:bg-slate-800/40 text-slate-600 dark:text-slate-300",
                width: "w-full max-w-sm",
              },
            ].map((layer, i) => (
              <div key={layer.layer} className="flex flex-col items-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`${layer.width} rounded-xl border ${layer.color} p-4 text-center`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-70">
                    {layer.layer}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
                {i < 3 && (
                  <div className="flex flex-col items-center py-1">
                    <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
                    <div className="text-slate-400 dark:text-slate-600 text-xs">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
            Dependencies point inward — Domain has zero external dependencies
          </p>
        </motion.div>
      </div>
    </section>
  );
}
