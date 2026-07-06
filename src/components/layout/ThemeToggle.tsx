"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

type ThemeOption = "light" | "dark" | "system";

const options: { value: ThemeOption; icon: typeof Sun; label: string }[] = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onClick = () => setOpen(false);
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700" />
    );
  }

  const current =
    options.find((o) => o.value === theme) ?? options[2];
  const CurrentIcon = current.icon;

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        aria-label="Toggle theme"
      >
        <CurrentIcon size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg shadow-black/5 dark:shadow-black/20 overflow-hidden z-50">
          {options.map((option) => {
            const Icon = option.icon;
            const isActive = theme === option.value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                <Icon size={14} />
                {option.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-500" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
