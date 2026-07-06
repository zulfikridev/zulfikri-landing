"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowRight, Wifi } from "lucide-react";
import { CANDIDATE } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-6">
            <span className="glow-dot" />
            Available for Opportunities
            <Wifi size={12} />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Looking for a Reliable{" "}
            <br className="hidden md:block" />
            <span className="text-gradient">Full-Stack Engineer?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            I&apos;m actively seeking opportunities to build ambitious products. If you need an engineer who cares about code quality and business outcomes — let&apos;s talk.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
        >
          <a
            href={`mailto:${CANDIDATE.email}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 hover:border-indigo-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
              <Mail size={18} className="text-indigo-500 dark:text-indigo-400" />
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">Email</p>
              <p className="text-sm text-slate-900 dark:text-white font-medium break-all">{CANDIDATE.email}</p>
            </div>
            <ArrowRight size={14} className="text-slate-400 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href={CANDIDATE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Linkedin size={18} className="text-blue-500 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">LinkedIn</p>
              <p className="text-sm text-slate-900 dark:text-white font-medium">Zulfikri Md Zin</p>
            </div>
            <ArrowRight size={14} className="text-slate-400 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href={`tel:${CANDIDATE.phone.replace(/\D/g, "")}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/60 hover:border-emerald-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Phone size={18} className="text-emerald-500 dark:text-emerald-400" />
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-1">Phone / WhatsApp</p>
              <p className="text-sm text-slate-900 dark:text-white font-medium">{CANDIDATE.phone}</p>
            </div>
            <ArrowRight size={14} className="text-slate-400 dark:text-slate-600 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${CANDIDATE.email}?subject=Engineering%20Opportunity&body=Hi%20Zulfikri%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.`}
            className="btn-primary px-8 py-4 text-base group"
          >
            Send Me a Message
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Subtle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-slate-400 dark:text-slate-600 mt-8"
        >
          Based in Malaysia (UTC+8) · Open to on-site, hybrid, and remote arrangements
        </motion.p>
      </div>
    </section>
  );
}
