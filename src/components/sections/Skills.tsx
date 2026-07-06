"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const skillCategories = [
  {
    key: "backend" as const,
    label: "Backend",
    icon: "⚙️",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    accent: "bg-purple-500",
  },
  {
    key: "frontend" as const,
    label: "Frontend",
    icon: "🖥️",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    accent: "bg-blue-500",
  },
  {
    key: "architecture" as const,
    label: "Architecture",
    icon: "🏛️",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    accent: "bg-indigo-500",
  },
  {
    key: "tools" as const,
    label: "Tools & DevOps",
    icon: "🛠️",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500",
  },
];

function SkillBar({
  name,
  level,
  accent,
  delay,
}: {
  name: string;
  level: number;
  accent: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs text-slate-400 dark:text-slate-600 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${accent}`}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-3">Technical Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            The Full{" "}
            <span className="text-gradient">Technical Stack</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            6 years of depth across the entire software development lifecycle — from database schema to polished UI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${category.color} border ${category.border} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {category.label}
                </h3>
              </div>
              <div className="space-y-4">
                {SKILLS[category.key].map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    accent={category.accent}
                    delay={catIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
