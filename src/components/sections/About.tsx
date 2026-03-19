"use client";

import { motion } from "framer-motion";
import { Clock, Users, Globe, Laptop } from "lucide-react";
import { CANDIDATE } from "@/lib/data";

const traits = [
  {
    icon: Clock,
    title: "Async-first Communication",
    description:
      "Experienced working across time zones. I write clear documentation, keep async updates detailed, and never leave a pull request hanging.",
  },
  {
    icon: Users,
    title: "Stakeholder Collaboration",
    description:
      "I bridge the gap between technical teams and business stakeholders, translating complex systems into plain language and business requirements into clean architecture.",
  },
  {
    icon: Globe,
    title: "Remote-Native Work Style",
    description:
      "I've operated independently in distributed team environments — structured, disciplined, and proactive about surfacing blockers early.",
  },
  {
    icon: Laptop,
    title: "Full Lifecycle Ownership",
    description:
      "From requirements gathering to production deployment. I own features end-to-end and care deeply about what happens after the PR is merged.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Engineer Behind
              <br />
              <span className="text-gradient">the Architecture</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m <span className="text-white font-medium">{CANDIDATE.name}</span>, a full-stack software
                engineer based in Malaysia with {CANDIDATE.yearsExperience}+ years building enterprise-grade
                systems across financial services, healthcare, and travel industries.
              </p>
              <p>
                My engineering philosophy centers on <span className="text-indigo-400">maintainability over cleverness</span>.
                I believe the best code is code that a new team member can understand on day one — so I invest
                heavily in Clean Architecture, meaningful naming, and ruthless separation of concerns.
              </p>
              <p>
                When I&apos;m not building systems, I&apos;m thinking about <span className="text-indigo-400">system design</span> —
                how bounded contexts interact, where consistency boundaries should live, and how to design
                APIs that make wrong usage impossible.
              </p>
              <p>
                I&apos;m actively seeking remote opportunities with <span className="text-white font-medium">USD-paying companies</span>{" "}
                where I can contribute to meaningful products alongside high-caliber engineering teams.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Let&apos;s Talk
              </a>
              <a
                href={CANDIDATE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Traits grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {traits.map((trait, i) => {
              const Icon = trait.icon;
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {trait.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {trait.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
