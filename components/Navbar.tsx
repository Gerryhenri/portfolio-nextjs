"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["home", "about","skills", "projects","contact"];

  return (
    <nav className="fixed w-full z-50">

      {/* WRAPPER */}
      <div className="bg-black/40 backdrop-blur-md border-b border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-xl font-semibold text-white">
            Gerry
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2 text-sm text-gray-300">
            {menu.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
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

          {menu.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block w-full py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

        </div>
      </div>

    </nav>
  );
}