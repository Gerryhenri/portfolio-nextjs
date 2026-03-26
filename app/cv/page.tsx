"use client";

import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";
import {
  contacts,
  cvSkills,
  profile,
  projects,
  roles,
} from "../../lib/portfolio-data";

export default function CvPage() {
  const { locale, setLocale } = useLanguage();
  const handlePrint = () => {
    window.print();
  };

  const cvCopy = {
    id: {
      back: "Kembali",
      savePdf: "Simpan PDF",
      subtitle:
        `${profile.title} dengan fokus pada machine learning, computer vision, dan solusi digital yang aplikatif.`,
      profileTitle: "Profil Singkat",
      featuredProjects: "Proyek Pilihan",
      focusRoles: "Fokus Peran",
      coreSkills: "Keahlian Utama",
      addedValue: "Nilai Tambah",
      addedValueItems: [
        "Mengubah kebutuhan bisnis menjadi alur kerja digital yang jelas.",
        "Menggabungkan analisis data dengan implementasi teknis yang praktis.",
        "Fokus pada hasil yang rapi, komunikatif, dan siap digunakan.",
      ],
      contactPortfolio: "Kontak & Portofolio",
      footer:
        "Dokumen ini dirancang untuk disimpan melalui menu print browser sebagai PDF dengan ukuran rapi.",
    },
    en: {
      back: "Back",
      savePdf: "Save PDF",
      subtitle:
        `${profile.title} focused on machine learning, computer vision, and practical digital solutions.`,
      profileTitle: "Profile Summary",
      featuredProjects: "Featured Projects",
      focusRoles: "Role Focus",
      coreSkills: "Core Skills",
      addedValue: "Value Offered",
      addedValueItems: [
        "Turning business needs into clear digital workflows.",
        "Combining data analysis with practical technical execution.",
        "Focused on neat, communicative, and ready-to-use outcomes.",
      ],
      contactPortfolio: "Contact & Portfolio",
      footer:
        "This document is designed to be saved through the browser print menu as a clean PDF.",
    },
  } as const;

  const currentCopy = cvCopy[locale];
  const localizedProjects =
    locale === "id"
      ? projects.slice(0, 3)
      : [
          {
            ...projects[0],
            title: "Housing Classification",
            detail:
              "Uses machine learning to classify houses based on structural and condition data.",
          },
          {
            ...projects[1],
            title: "ESP32 Fire-Fighting Robot",
            detail:
              "A mobile fire-fighting robot built with ESP32, Bluetooth control, and a mini water pump.",
          },
          {
            ...projects[2],
            title: "RevoU Data Analytics",
            detail:
              "Superstore sales analytics project with an interactive Looker Studio dashboard integrated into a Next.js web app.",
          },
        ];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#dbeafe_0%,#eff6ff_28%,#f8fafc_100%)] px-4 py-8 text-slate-900 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto flex max-w-5xl justify-end gap-3 pb-6 print:hidden">
        <fieldset className="locale-switch locale-switch--light mr-auto inline-flex" aria-label="Language switcher">
          <label className={`locale-option ${locale === "id" ? "locale-option--active" : ""}`}>
            <input
              type="radio"
              name="language-cv"
              value="id"
              checked={locale === "id"}
              onChange={() => setLocale("id")}
              className="sr-only"
            />
            <span className="locale-dot" aria-hidden="true" />
            <span>ID</span>
          </label>

          <label className={`locale-option ${locale === "en" ? "locale-option--active" : ""}`}>
            <input
              type="radio"
              name="language-cv"
              value="en"
              checked={locale === "en"}
              onChange={() => setLocale("en")}
              className="sr-only"
            />
            <span className="locale-dot" aria-hidden="true" />
            <span>EN</span>
          </label>
        </fieldset>
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          {currentCopy.back}
        </Link>
        <button
          type="button"
          onClick={handlePrint}
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {currentCopy.savePdf}
        </button>
      </div>

      <section className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] print:max-w-none print:rounded-none print:border-0 print:shadow-none">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] print:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-slate-950 px-8 py-10 text-white print:px-8 print:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Curriculum Vitae
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-3 max-w-xl text-lg text-slate-300">
              {currentCopy.subtitle}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {currentCopy.profileTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                {locale === "id"
                  ? profile.summary
                  : "I help transform ideas into data-driven digital solutions. My experience focuses on data analysis, machine learning implementation, and practical computer vision and IoT systems."}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                {currentCopy.featuredProjects}
              </h2>
              <div className="mt-4 space-y-4">
                {localizedProjects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-base font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="px-8 py-10 print:px-8 print:py-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                {currentCopy.focusRoles}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                {currentCopy.coreSkills}
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {cvSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                {currentCopy.addedValue}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                {currentCopy.addedValueItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                {currentCopy.contactPortfolio}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <p>GitHub: {contacts.github.replace("https://", "")}</p>
                <p>LinkedIn: {contacts.linkedin.replace("https://", "")}</p>
                <p>Instagram: @eduardus_gerry</p>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
              {currentCopy.footer}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



