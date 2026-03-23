  "use client";

  import { useEffect, useState, useRef } from "react";
  import Navbar from "../components/Navbar";
  import emailjs from "emailjs-com";
  import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
  import {
    contacts,
    profile,
    projects,
    roles,
    skillItems,
    texts,
    type Project,
  } from "../lib/portfolio-data";

  export default function Home() {
    const form = useRef<HTMLFormElement>(null);
    const whatsappNumber = contacts.whatsapp;
    const whatsappDisplay = "0853-4534-9665";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Halo Gerry, saya tertarik untuk berdiskusi mengenai project dan kolaborasi."
    )}`;
    
    // 🔥 TAMBAHAN (FIX HYDRATION)
    const [isMounted, setIsMounted] = useState(false);

    // State Management
    const [showTop, setShowTop] = useState(false);
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // 🔥 WAJIB (mount guard)
    useEffect(() => {
      setIsMounted(true);
    }, []);

    // 3. SCROLL LISTENER
    useEffect(() => {
      if (!isMounted) return; // 🔥 TAMBAHAN

      const handleScroll = () => {
        setShowTop(window.scrollY > 300);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isMounted]);

    // TEXT LOOP ROLE
    useEffect(() => {
      if (!isMounted) return; // 🔥 TAMBAHAN

      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);

      return () => clearInterval(interval);
    }, [isMounted]);
  // TYPING TEXT (FIX HYDRATION)
      useEffect(() => {
        if (!isMounted) return; // 🔥 LINE PENTING

        let i = 0;
        const current = texts[textIndex];

        const typing = setInterval(() => {
          setDisplayText(current.slice(0, i));
          i++;

          if (i > current.length) {
            clearInterval(typing);
            setTimeout(() => {
              setTextIndex((prev) => (prev + 1) % texts.length);
            }, 2000);
          }
        }, 40);

        return () => clearInterval(typing);
      }, [textIndex, isMounted]);

    // FADE-IN OBSERVER
    useEffect(() => {
      const elements = document.querySelectorAll(".fade-in");

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect(); // Cleanup observer yang lebih baik
    }, []);

    // LOCK SCROLL MODAL
    useEffect(() => {
      document.body.style.overflow = selectedProject ? "hidden" : "auto";
    }, [selectedProject]);

    // EMAIL HANDLER
    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);

      if (!form.current) return;

      emailjs
        .sendForm(
          "service_tez8crh",
          "template_c563kc8",
          form.current,
          "pKQcZVtMOM9rJOGeS"
        )
        .then(() => {
          alert("Pesan berhasil dikirim!");
          setLoading(false);
          form.current?.reset();
        })
        .catch((error) => {
          alert("Gagal mengirim: " + error.text);
          setLoading(false);
        });
    };

      return (
      <main suppressHydrationWarning className="relative min-h-screen text-white print:text-slate-900">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden no-print">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"></div>

          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-blob top-[-100px] left-[-100px]"></div>

          <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] animate-blob animation-delay-2000 bottom-[-100px] right-[-100px]"></div>

          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000 top-[50%] left-[30%]"></div>
        </div>

        <div className="fixed inset-0 bg-black/40 -z-10 no-print"></div>

        <Navbar />

        {/* HERO MODERN */}
        <section
        id="home"
        className="print-section flex flex-col md:flex-row items-center justify-between min-h-screen px-6 pt-28 gap-10 md:px-20 md:pt-24">

          {/* LEFT */}
          <div className="max-w-xl">

            <p className="text-gray-400 tracking-widest mb-2">
              HALO, SAYA
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {profile.name}
            </h1>

            <h2 className="text-xl text-gray-300 mb-4">
              {roles[index]}
            </h2>

            {/* TYPING */}
            <p className="text-gray-400 mb-6 min-h-[50px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>

            {/* SOCIAL */}
            <div className="flex gap-5 text-xl mb-6">

              <a href={contacts.github} target="_blank" className="text-white hover:text-cyan-300">
                <FaGithub className="text-white" />
              </a>

              <a href={contacts.linkedin} target="_blank" className="text-slate-200 hover:text-cyan-300">
                <FaLinkedin />
              </a>

              <a href={contacts.instagram} target="_blank" className="text-slate-200 hover:text-cyan-300">
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl opacity-0 group-hover:opacity-70 transition duration-500 rounded-2xl"></div>

            <div className="relative glass p-4 rounded-2xl">

              <img
                src="/images/profil.jpg"
                alt={`Foto profil ${profile.name}`}
                className="w-[300px] h-[400px] object-cover rounded-xl"
              />
              
            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="fade-in print-section py-24 px-6 flex justify-center">
          <div className="max-w-5xl w-full glass print-card p-10 rounded-2xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/images/miror.jpeg"
                alt={`Foto ${profile.name}`}
                className="w-56 h-56 object-cover rounded-xl mx-auto"
              />

              <div>
                <h2 className="text-3xl font-semibold mb-6">
                  Tentang Saya
                </h2>
                <p className="text-gray-300">
                  {profile.about}
                </p>
              </div>
              <a
                href="/cv"
                target="_blank"
                rel="noreferrer"
                className="glass-button glass-button--accent mt-5 w-fit no-print"
              >
                Buka CV PDF
              </a>

            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="fade-in print-section py-20 px-6 flex justify-center">
          <div className="max-w-5xl w-full">

            <h2 className="text-3xl font-bold text-center mb-10">
              Keahlian
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">

              {skillItems.map((s, i) => (
                <div
                  key={i}
                  className="relative group glass p-6 rounded-xl flex items-center justify-center hover-soft cursor-pointer"
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    className={`w-10 h-10 ${s.name === "GitHub" ? "invert brightness-0 saturate-0" : ""}`}
                  />

                  {/* 🔥 HOVER TEXT */}
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                    <p className="text-sm text-white font-semibold">
                      {s.name}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      
      {/* PROJECT */}
        
        {/* PROJECT */}
  <section id="projects" className="fade-in print-section py-20 px-6">
    <h2 className="text-3xl text-center mb-10">
      Project
    </h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

      {/* 🔥 LEFT (CARD BESAR) */}
      <div
        className="relative group md:col-span-2 h-[300px] rounded-xl overflow-hidden cursor-pointer 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" // 🔥 UPDATED
        onClick={() => setSelectedProject(projects[0])}
      >
        <img
          src={projects[0].img}
          alt={projects[0].title}
          className="w-full h-full object-cover 
                    grayscale group-hover:grayscale-0 
                    group-hover:scale-105 
                    transition-all duration-500" // 🔥 UPDATED
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                        flex flex-col justify-end p-6
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-500"> {/* 🔥 UPDATED */}

          <h3 className="text-xl font-bold text-blue-400">
            {projects[0].title}
          </h3>

          <p className="text-gray-300 text-sm">
            {projects[0].desc}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProject(projects[0]);
            }}
            className="glass-button glass-button--sm mt-3 w-fit no-print"
          >
            Detail
          </button>
        </div>
      </div>

      {/* 🔥 RIGHT (3 CARD KECIL) */}
      <div className="grid grid-rows-3 gap-6">

        {projects.slice(1, 4).map((p, i) => (
          <div
            key={i}
            className="relative group h-[90px] rounded-xl overflow-hidden cursor-pointer
                      transition-all duration-500 hover:-translate-y-1 hover:shadow-xl" // 🔥 UPDATED
            onClick={() => setSelectedProject(p)}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover 
                        grayscale group-hover:grayscale-0 
                        group-hover:scale-105 
                        transition-all duration-500" // 🔥 UPDATED
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70 
                            flex items-center justify-between px-4
                            opacity-0 group-hover:opacity-100 
                            transition-all duration-500"> {/* 🔥 UPDATED */}

              <h3 className="text-sm text-white font-semibold">
                {p.title}
              </h3>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(p);
                }}
                className="glass-button glass-button--sm no-print"
              >
                Detail
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>

        {/* MODAL */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 no-print"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 p-6 rounded-xl max-w-lg w-full"
            >
              <img src={selectedProject.img} alt={selectedProject.title} className="rounded mb-4" />
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-400">{selectedProject.detail}</p>
            </div>
          </div>
        )}

        {/* CONTACT */}
        <section id="contact" className="fade-in print-section py-24 px-6 flex justify-center">

          <div className="glass print-card contact-shell max-w-5xl w-full overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="contact-panel p-8 md:p-10">
                <span className="contact-badge">
                  Mari Terhubung
                </span>

                <h2 className="text-3xl md:text-4xl mt-5">
                  Contact
                </h2>

                <p className="mt-4 max-w-md text-slate-300 leading-7">
                  Punya ide project, kolaborasi, atau ingin berdiskusi lebih cepat?
                  Pilih cara paling nyaman untuk menghubungi saya: langsung chat
                  lewat WhatsApp atau kirim detail kebutuhan lewat email form.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                        WhatsApp
                      </p>
                      <p className="text-sm text-slate-200">{whatsappDisplay}</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link mt-3"
                      >
                        Chat via WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaLinkedin />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                        LinkedIn
                      </p>
                      <p className="text-sm text-slate-200 break-all">
                        {contacts.linkedin}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="contact-choice-grid mb-6 no-print">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-choice-card"
                  >
                    <span className="contact-choice-title">Hubungi via WhatsApp</span>
                    <span className="contact-choice-copy">
                      Buka chat langsung ke nomor {whatsappDisplay}
                    </span>
                  </a>

                  <div className="contact-choice-card contact-choice-card--muted">
                    <span className="contact-choice-title">Hubungi via Email</span>
                    <span className="contact-choice-copy">
                      Isi form di bawah untuk mengirim pesan lebih lengkap
                    </span>
                  </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="input-group">
                      <span className="input-label">Nama</span>
                      <input name="nama" placeholder="Nama lengkap" required className="input input--fancy" />
                    </label>

                    <label className="input-group">
                      <span className="input-label">WhatsApp</span>
                      <input name="whatsapp" placeholder="08xxxxxxxxxx" className="input input--fancy" />
                    </label>
                  </div>

                  <label className="input-group">
                    <span className="input-label">Email</span>
                    <input type="email" name="email" placeholder="email@anda.com" required className="input input--fancy" />
                  </label>

                  <label className="input-group">
                    <span className="input-label">Pesan</span>
                    <textarea name="pesan" rows={5} placeholder="Ceritakan kebutuhan atau ide project Anda..." required className="input input--fancy min-h-36 resize-none" />
                  </label>

                  <button type="submit" className="glass-button glass-button--accent glass-button--full no-print">
                    {loading ? "Mengirim..." : "Kirim Pesan"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 BACK TO TOP */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="glass-button no-print fixed bottom-6 right-6 z-50 h-12 w-12 p-0"
            aria-label="Kembali ke atas"
          >
            ↑
          </button>
        )}

      </main>
    );
  }
