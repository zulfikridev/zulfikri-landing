import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { CANDIDATE } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950/50">
      <div className="container-max section-padding py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              Z
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{CANDIDATE.name}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin size={10} />
                {CANDIDATE.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${CANDIDATE.email}`}
              className="p-2 text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={CANDIDATE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={CANDIDATE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-indigo-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>

          <p className="text-xs text-slate-600">
            © {currentYear} {CANDIDATE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
