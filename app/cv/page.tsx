"use client";

import Link from "next/link";
import {
  contacts,
  cvSkills,
  profile,
  projects,
  roles,
} from "../../lib/portfolio-data";

export default function CvPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#dbeafe_0%,#eff6ff_28%,#f8fafc_100%)] px-4 py-8 text-slate-900 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto flex max-w-5xl justify-end gap-3 pb-6 print:hidden">
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          Kembali
        </Link>
        <button
          type="button"
          onClick={handlePrint}
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Simpan PDF
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
              {profile.title} dengan fokus pada machine learning, computer
              vision, dan solusi digital yang aplikatif.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Profil Singkat
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                {profile.summary}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Proyek Pilihan
              </h2>
              <div className="mt-4 space-y-4">
                {projects.slice(0, 3).map((project) => (
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
                Fokus Peran
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
                Keahlian Utama
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
                Nilai Tambah
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <p>Mengubah kebutuhan bisnis menjadi alur kerja digital yang jelas.</p>
                <p>Menggabungkan analisis data dengan implementasi teknis yang praktis.</p>
                <p>Fokus pada hasil yang rapi, komunikatif, dan siap digunakan.</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Kontak & Portofolio
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                <p>GitHub: {contacts.github.replace("https://", "")}</p>
                <p>LinkedIn: {contacts.linkedin.replace("https://", "")}</p>
                <p>Instagram: @eduardus_gerry</p>
              </div>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
              Dokumen ini dirancang untuk disimpan melalui menu print browser
              sebagai PDF dengan ukuran rapi.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
