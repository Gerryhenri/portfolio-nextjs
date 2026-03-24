"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

const MENU = ["home", "about", "skills", "projects", "journey", "contact"];
const MENU_LABELS = {
  id: {
    home: "Home",
    about: "Tentang",
    skills: "Keahlian",
    projects: "Project",
    journey: "Edukasi",
    contact: "Kontak",
  },
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    journey: "Education",
    contact: "Contact",
  },
};

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2.5v3" />
        <path d="M12 18.5v3" />
        <path d="M4.93 4.93l2.12 2.12" />
        <path d="M16.95 16.95l2.12 2.12" />
        <path d="M2.5 12h3" />
        <path d="M18.5 12h3" />
        <path d="M4.93 19.07l2.12-2.12" />
        <path d="M16.95 7.05l2.12-2.12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7Z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const toggleLocale = () => setLocale(locale === "id" ? "en" : "id");

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = MENU.findLast((item) => {
        const element = document.getElementById(item);

        if (!element) return false;

        const offset = element.offsetTop - 140;
        return window.scrollY >= offset;
      });

      setActiveSection(currentSection ?? "home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 no-print">
      <div
        className={`backdrop-blur-md border-b ${
          theme === "dark" ? "bg-black/40 border-white/10" : "bg-white/70 border-slate-900/8"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className={`text-xl font-bold tracking-tight ${theme === "dark" ? "text-white" : "text-slate-950"}`}>
            Gerry
          </h1>

          <div className={`hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2 text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-slate-600"}`}>
            {MENU.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`nav-link relative inline-flex items-center justify-center pb-4 transition ${
                  activeSection === item
                    ? theme === "dark"
                      ? "text-white"
                      : "text-slate-950"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {MENU_LABELS[locale][item as keyof typeof MENU_LABELS.en]}
                <span
                  aria-hidden="true"
                  className={`nav-triangle ${
                    activeSection === item ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-pill"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <ThemeIcon theme={theme} />
            </button>

            <button
              type="button"
              onClick={toggleLocale}
              className="locale-pill"
              aria-label={`Switch language to ${locale === "id" ? "English" : "Indonesian"}`}
            >
              <span className="locale-pill__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M3.5 12h17" />
                  <path d="M12 3.5a13.5 13.5 0 0 1 0 17" />
                  <path d="M12 3.5a13.5 13.5 0 0 0 0 17" />
                </svg>
              </span>
              <span>{locale.toUpperCase()}</span>
            </button>
          </div>

          <button
            className={`md:hidden text-2xl ${theme === "dark" ? "text-white" : "text-slate-950"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ≡
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[32rem]" : "max-h-0"}`}>
        <div className={`backdrop-blur-xl px-6 py-6 space-y-4 text-center ${theme === "dark" ? "bg-black/90" : "bg-white/90"}`}>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-pill inline-flex"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <ThemeIcon theme={theme} />
            </button>

            <button
              type="button"
              onClick={toggleLocale}
              className="locale-pill inline-flex"
              aria-label={`Switch language to ${locale === "id" ? "English" : "Indonesian"}`}
            >
              <span className="locale-pill__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M3.5 12h17" />
                  <path d="M12 3.5a13.5 13.5 0 0 1 0 17" />
                  <path d="M12 3.5a13.5 13.5 0 0 0 0 17" />
                </svg>
              </span>
              <span>{locale.toUpperCase()}</span>
            </button>
          </div>

          {MENU.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block w-full py-3 rounded-lg transition ${
                activeSection === item
                  ? theme === "dark"
                    ? "bg-white/12 text-white"
                    : "bg-slate-900/8 text-slate-950"
                  : theme === "dark"
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-900/6"
              }`}
            >
              {MENU_LABELS[locale][item as keyof typeof MENU_LABELS.en]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
