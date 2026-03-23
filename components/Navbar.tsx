"use client";

import { useEffect, useState } from "react";

const MENU = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

      {/* WRAPPER */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-xl font-semibold text-white">
            Gerry
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2 text-sm text-gray-300">
            {MENU.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`nav-link relative inline-flex items-center justify-center pb-4 transition ${
                  activeSection === item ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  aria-hidden="true"
                  className={`nav-triangle ${
                    activeSection === item ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* BURGER */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl px-6 py-6 space-y-4 text-center">

          {MENU.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block w-full py-3 rounded-lg transition ${
                activeSection === item
                  ? "bg-white/12 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

        </div>
      </div>

    </nav>
  );
}
