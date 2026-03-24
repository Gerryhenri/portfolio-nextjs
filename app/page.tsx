  "use client";

  import { useEffect, useState, useRef } from "react";
  import Navbar from "../components/Navbar";
  import { useLanguage } from "../components/LanguageProvider";
  import { useTheme } from "../components/ThemeProvider";
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

  type JourneyEntry = {
    period: string;
    title: string;
    org: string;
    desc: string;
    accent?: boolean;
  };

  const pageCopy = {
    id: {
      heroGreeting: "HALO, SAYA",
      aboutTitle: "Tentang Saya",
      aboutBody: profile.about,
      cvButton: "Buka CV PDF",
      skillsTitle: "Keahlian",
      projectsTitleLead: "Project",
      projectsTitleAccent: "Pilihan",
      projectsSubtitle: "Beberapa karya yang menonjolkan fokus saya di data, machine learning, dan computer vision.",
      journeyTitleLead: "Edukasi",
      journeyTitleAccent: "& Pengalaman",
      journeySubtitle: "Ringkasan perjalanan belajar dan pengalaman praktis yang membentuk fokus saya saat ini.",
      journeyItems: [
        {
          period: "2023 - Sekarang",
          title: "Pendalaman Machine Learning",
          org: "Belajar Mandiri & Implementasi Proyek",
          desc: "Mendalami klasifikasi data, computer vision, dan evaluasi model melalui studi mandiri serta eksperimen berbasis project.",
        },
        {
          period: "2024 - Sekarang",
          title: "Pengalaman Project Portfolio",
          org: "Personal & Freelance-style Development",
          desc: "Membangun project analisis data, deteksi objek, serta monitoring IoT untuk mengasah penerapan solusi yang lebih nyata.",
          accent: true,
        },
        {
          period: "Fokus Saat Ini",
          title: "Data Analyst & AI Builder",
          org: "Eksplorasi Data, Visualisasi, dan Otomasi",
          desc: "Berfokus pada pengolahan data, dashboard, machine learning, dan integrasi sistem yang efisien dan mudah dipahami pengguna.",
        },
      ] as JourneyEntry[],
      detailButton: "Detail",
      contactBadge: "Mari Terhubung",
      contactTitle: "Contact",
      contactBody:
        "Punya ide project, kolaborasi, atau ingin berdiskusi lebih cepat? Pilih cara paling nyaman untuk menghubungi saya: langsung chat lewat WhatsApp atau kirim detail kebutuhan lewat email form.",
      whatsappTitle: "WhatsApp",
      whatsappAction: "Chat via WhatsApp",
      linkedinTitle: "LinkedIn",
      locationTitle: "Lokasi",
      locationValue: "Kalimantan Barat, Indonesia",
      contactOptionWhatsapp: "Hubungi via WhatsApp",
      contactOptionWhatsappCopy: "Buka chat langsung ke nomor",
      contactOptionEmail: "Hubungi via Email",
      contactOptionEmailCopy: "Isi form di bawah untuk mengirim pesan lebih lengkap",
      nameLabel: "Nama",
      namePlaceholder: "Nama lengkap",
      whatsappLabel: "WhatsApp",
      whatsappPlaceholder: "08xxxxxxxxxx",
      emailLabel: "Email",
      emailPlaceholder: "email@anda.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan kebutuhan atau ide project Anda...",
      sendButton: "Kirim Pesan",
      sendingButton: "Mengirim...",
      successMessage: "Pesan berhasil dikirim!",
      errorMessage: "Gagal mengirim: ",
      whatsappIntro: "Halo Gerry, saya tertarik untuk berdiskusi mengenai project dan kolaborasi.",
      roles,
      texts,
      projects,
    },
    en: {
      heroGreeting: "HELLO, I AM",
      aboutTitle: "About Me",
      aboutBody: "Data Analyst focused on Machine Learning and Computer Vision.",
      cvButton: "Open CV PDF",
      skillsTitle: "Skills",
      projectsTitleLead: "Selected",
      projectsTitleAccent: "Projects",
      projectsSubtitle: "Some works that highlight my expertise in data, machine learning, and computer vision.",
      journeyTitleLead: "Education",
      journeyTitleAccent: "& Experience",
      journeySubtitle: "A quick overview of the learning path and practical work that shape my current focus.",
      journeyItems: [
        {
          period: "2023 - Present",
          title: "Machine Learning Development",
          org: "Self-directed Learning & Project Implementation",
          desc: "Deepening my understanding of data classification, computer vision, and model evaluation through hands-on project work.",
        },
        {
          period: "2024 - Present",
          title: "Portfolio Project Experience",
          org: "Personal & Freelance-style Development",
          desc: "Building data analysis, object detection, and IoT monitoring projects to strengthen practical problem-solving skills.",
          accent: true,
        },
        {
          period: "Current Focus",
          title: "Data Analyst & AI Builder",
          org: "Data Exploration, Visualization, and Automation",
          desc: "Focused on data processing, dashboards, machine learning, and efficient systems that stay easy to understand for users.",
        },
      ] as JourneyEntry[],
      detailButton: "Details",
      contactBadge: "Let’s Connect",
      contactTitle: "Contact",
      contactBody:
        "Have a project idea, collaboration, or want to discuss something quickly? Choose the most convenient way to reach me: start a WhatsApp chat or send the details through the email form.",
      whatsappTitle: "WhatsApp",
      whatsappAction: "Chat via WhatsApp",
      linkedinTitle: "LinkedIn",
      locationTitle: "Location",
      locationValue: "West Kalimantan, Indonesia",
      contactOptionWhatsapp: "Contact via WhatsApp",
      contactOptionWhatsappCopy: "Open a direct chat to",
      contactOptionEmail: "Contact via Email",
      contactOptionEmailCopy: "Fill in the form below to send a more detailed message",
      nameLabel: "Name",
      namePlaceholder: "Full name",
      whatsappLabel: "WhatsApp",
      whatsappPlaceholder: "08xxxxxxxxxx",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project needs or idea...",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successMessage: "Message sent successfully!",
      errorMessage: "Failed to send: ",
      whatsappIntro: "Hi Gerry, I’m interested in discussing a project or collaboration.",
      roles: ["Data Analyst", "Machine Learning Engineer", "Computer Vision", "IoT Developer"],
      texts: [
        "I help businesses turn ideas into digital solutions.",
        "I build AI and computer vision based systems.",
        "My focus is Data Analysis and Machine Learning.",
      ],
      projects: [
        {
          title: "Housing Classification",
          desc: "ML model to identify uninhabitable housing conditions.",
          img: projects[0].img,
          detail: "Uses machine learning to classify houses based on structural and condition data.",
        },
        {
          title: "YOLO Object Detection",
          desc: "Real-time object detection using YOLO and OpenCV.",
          img: projects[1].img,
          detail: "YOLO-based real-time object detection implementation using OpenCV.",
        },
        {
          title: "Fish Farming IoT",
          desc: "IoT-based water pH and temperature monitoring.",
          img: projects[2].img,
          detail: "Sensor-based monitoring system for fish farming environments.",
        },
        {
          title: "Additional Project",
          desc: "Another portfolio project showcase.",
          img: projects[3].img,
          detail: "Additional project used to showcase broader capabilities.",
        },
      ] as Project[],
    },
  } as const;

  export default function Home() {
    const form = useRef<HTMLFormElement>(null);
    const { locale } = useLanguage();
    const { theme } = useTheme();
    const currentCopy = pageCopy[locale];
    const headingTextClass = theme === "dark" ? "text-white" : "text-slate-950";
    const bodyTextClass = theme === "dark" ? "text-slate-300" : "text-slate-600";
    const softTextClass = theme === "dark" ? "text-gray-400" : "text-slate-500";
    const iconTextClass = theme === "dark" ? "text-slate-200" : "text-slate-700";
    const githubIconClass = theme === "dark" ? "text-white" : "text-slate-900";
    const githubSkillClass =
      theme === "dark"
        ? "invert brightness-0 saturate-0"
        : "rounded-md bg-slate-900/6 p-1";
    const modalPanelClass =
      theme === "dark"
        ? "bg-slate-950/95 text-white border-white/10"
        : "bg-white/96 text-slate-950 border-slate-300/70 shadow-[0_24px_80px_rgba(15,23,42,0.18)]";
    const modalBodyTextClass = theme === "dark" ? "text-slate-300" : "text-slate-700";
    const modalMutedTextClass = theme === "dark" ? "text-slate-400" : "text-slate-500";
    const modalOverlayClass = theme === "dark" ? "bg-black/78" : "bg-slate-950/45 backdrop-blur-sm";
    const modalImageClass =
      theme === "dark"
        ? "border-white/10 bg-white/5"
        : "border-slate-300/80 bg-slate-100/90 shadow-[0_10px_30px_rgba(148,163,184,0.25)]";
    const modalContentCardClass =
      theme === "dark"
        ? "border-white/10 bg-white/[0.03]"
        : "border-slate-200/90 bg-slate-50/92 shadow-[0_12px_32px_rgba(148,163,184,0.16)]";
    const modalInfoGridCardClass =
      theme === "dark"
        ? "border-white/10 bg-white/[0.02]"
        : "border-slate-200/90 bg-white/92 shadow-[0_10px_24px_rgba(148,163,184,0.14)]";
    const framedCardClass =
      theme === "dark"
        ? "border border-white/10 shadow-[0_18px_40px_rgba(2,6,23,0.35)]"
        : "border border-slate-900/10 shadow-[0_18px_36px_rgba(148,163,184,0.22)]";
    const whatsappNumber = contacts.whatsapp;
    const whatsappDisplay = "0853-4534-9665";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      currentCopy.whatsappIntro
    )}`;
    
    // 🔥 TAMBAHAN (FIX HYDRATION)
    const [isMounted, setIsMounted] = useState(false);

    // State Management
    const [showTop, setShowTop] = useState(false);
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [loading, setLoading] = useState(false);
    const [whatsappInput, setWhatsappInput] = useState("");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const projectDetailImages = selectedProject?.detailImages?.length
      ? selectedProject.detailImages
      : selectedProject
        ? [selectedProject.img]
        : [];
    const hasMultipleProjectImages = projectDetailImages.length > 1;
    const projectMediaWrapperClass = hasMultipleProjectImages
      ? "grid gap-3 md:grid-cols-2"
      : "flex justify-center xl:justify-center";
    const projectMediaCardClass = hasMultipleProjectImages
      ? `overflow-hidden rounded-[1.35rem] border ${modalImageClass}`
      : `mx-auto w-full max-w-[900px] overflow-hidden rounded-[1.5rem] border ${modalImageClass}`;
    const projectMediaImageClass = hasMultipleProjectImages
      ? "h-[300px] w-full object-contain md:h-[360px] xl:h-[430px]"
      : "h-[420px] w-full object-contain md:h-[560px] xl:h-[720px]";
    const projectDetailParagraphs = selectedProject?.details?.length
      ? selectedProject.details
      : selectedProject
        ? [selectedProject.detail]
        : [];
    const projectDetailInfoGrid = selectedProject?.detailInfoGrid;
    const projectDetailSections = selectedProject?.detailSections ?? [];

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
      if (!isMounted) return;

      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % currentCopy.roles.length);
      }, 2000);

      return () => clearInterval(interval);
    }, [currentCopy.roles.length, isMounted]);

    // TYPING TEXT
    useEffect(() => {
      if (!isMounted) return;

      let i = 0;
      const current = currentCopy.texts[textIndex];

      const typing = setInterval(() => {
        setDisplayText(current.slice(0, i));
        i++;

        if (i > current.length) {
          clearInterval(typing);
          setTimeout(() => {
            setTextIndex((prev) => (prev + 1) % currentCopy.texts.length);
          }, 2000);
        }
      }, 40);

      return () => clearInterval(typing);
    }, [currentCopy.texts, isMounted, textIndex]);

    useEffect(() => {
      setIndex(0);
      setTextIndex(0);
      setDisplayText("");
    }, [locale]);

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
          alert(currentCopy.successMessage);
          setLoading(false);
          setWhatsappInput("");
          form.current?.reset();
        })
        .catch((error) => {
          alert(currentCopy.errorMessage + error.text);
          setLoading(false);
        });
    };

      return (
      <main
        suppressHydrationWarning
        className={`relative min-h-screen print:text-slate-900 ${
          theme === "dark" ? "text-white" : "text-slate-950"
        }`}
      >

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden no-print">
          <div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"
                : "bg-gradient-to-br from-[#f8fbff] via-[#e2edf8] to-[#d9eef4]"
            }`}
          ></div>

          <div
            className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-blob top-[-100px] left-[-100px] ${
              theme === "dark" ? "bg-blue-500/20" : "bg-sky-300/30"
            }`}
          ></div>

          <div
            className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-blob animation-delay-2000 bottom-[-100px] right-[-100px] ${
              theme === "dark" ? "bg-cyan-400/20" : "bg-teal-300/30"
            }`}
          ></div>

          <div
            className={`absolute w-[400px] h-[400px] rounded-full blur-[120px] animate-blob animation-delay-4000 top-[50%] left-[30%] ${
              theme === "dark" ? "bg-purple-500/20" : "bg-fuchsia-200/30"
            }`}
          ></div>
        </div>

        <div
          className={`fixed inset-0 -z-10 no-print ${
            theme === "dark" ? "bg-black/40" : "bg-white/25"
          }`}
        ></div>

        <Navbar />

        {/* HERO MODERN */}
        <section
        id="home"
        className="print-section flex flex-col md:flex-row items-center justify-between min-h-screen px-6 pt-28 gap-10 md:px-20 md:pt-24">

          {/* LEFT */}
          <div className="max-w-xl">

            <p className={`${softTextClass} tracking-widest mb-2`}>
              {currentCopy.heroGreeting}
            </p>

            <h1 className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight ${headingTextClass}`}>
              {profile.name}
            </h1>

            <h2 className={`text-xl mb-4 ${bodyTextClass}`}>
              {currentCopy.roles[index]}
            </h2>

            {/* TYPING */}
            <p className={`${softTextClass} mb-6 min-h-[50px]`}>
              {displayText}
              <span className="animate-pulse">|</span>
            </p>

            {/* SOCIAL */}
            <div className="flex gap-5 text-xl mb-6">

              <a href={contacts.github} target="_blank" className={`${githubIconClass} hover:text-cyan-300`}>
                <FaGithub className={githubIconClass} />
              </a>

              <a href={contacts.linkedin} target="_blank" className={`${iconTextClass} hover:text-cyan-300`}>
                <FaLinkedin />
              </a>

              <a href={contacts.instagram} target="_blank" className={`${iconTextClass} hover:text-cyan-300`}>
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
                <h2 className={`text-3xl font-semibold mb-6 ${headingTextClass}`}>
                  {currentCopy.aboutTitle}
                </h2>
                <p className={bodyTextClass}>
                  {currentCopy.aboutBody}
                </p>
              </div>
              <a
                href="/cv"
                target="_blank"
                rel="noreferrer"
                className="glass-button glass-button--accent mt-5 w-fit no-print"
              >
                {currentCopy.cvButton}
              </a>

            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="fade-in print-section py-20 px-6 flex justify-center">
          <div className="max-w-5xl w-full">

            <h2 className={`text-3xl font-bold text-center mb-10 ${headingTextClass}`}>
              {currentCopy.skillsTitle}
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
                    className={`w-10 h-10 ${s.name === "GitHub" ? githubSkillClass : ""}`}
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
        <section id="projects" className="fade-in print-section py-20 px-6">
          <div className="mb-10 text-center">
            <h2 className={`text-3xl font-bold md:text-5xl ${headingTextClass}`}>
              <span>{currentCopy.projectsTitleLead} </span>
              <span className="text-cyan-300">{currentCopy.projectsTitleAccent}</span>
            </h2>

            <p className={`mx-auto mt-4 max-w-2xl text-sm md:text-base ${bodyTextClass}`}>
              {currentCopy.projectsSubtitle}
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div
              className={`relative group md:col-span-2 h-[300px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${framedCardClass}`}
              onClick={() => setSelectedProject(currentCopy.projects[0])}
            >
              <img
                src={currentCopy.projects[0].img}
                alt={currentCopy.projects[0].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-blue-400">
                  {currentCopy.projects[0].title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {currentCopy.projects[0].desc}
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(currentCopy.projects[0]);
                    }}
                    className="glass-button glass-button--sm w-fit no-print"
                  >
                    {currentCopy.detailButton}
                  </button>

                  <a
                    href={currentCopy.projects[0].repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="glass-button glass-button--sm w-fit no-print"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-3 gap-6">
              {currentCopy.projects.slice(1, 4).map((project) => (
                <div
                  key={project.title}
                  className={`relative group h-[90px] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${framedCardClass}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-black/70 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-sm text-white font-semibold">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="glass-button glass-button--sm no-print"
                      >
                        {currentCopy.detailButton}
                      </button>

                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="glass-button glass-button--sm no-print"
                      >
                        GitHub
                      </a>
                    </div>
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
            className={`fixed inset-0 z-50 flex items-center justify-center p-3 md:p-5 no-print ${modalOverlayClass}`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`${modalPanelClass} ${framedCardClass} max-h-[94vh] w-full max-w-[min(96vw,1380px)] overflow-y-auto rounded-[2rem] border p-4 md:p-6 xl:p-7`}
            >
              <div className="mb-4 flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                <div className="min-w-0">
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${modalMutedTextClass}`}>Project Detail</p>
                  <h3 className={`mt-2 text-2xl font-bold leading-none md:text-[2.8rem] ${headingTextClass}`}>{selectedProject.title}</h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="glass-button glass-button--sm shrink-0 no-print"
                >
                  Close
                </button>
              </div>

              <div className="grid gap-3 xl:grid-cols-[1.32fr_0.68fr] xl:items-start">
                <div className="space-y-4">
                  <div className={projectMediaWrapperClass}>
                    {projectDetailImages.map((image, index) => (
                      <div key={`${selectedProject.title}-${index}`} className={projectMediaCardClass}>
                        <img
                          src={image}
                          alt={`${selectedProject.title} preview ${index + 1}`}
                          className={projectMediaImageClass}
                        />
                      </div>
                    ))}
                  </div>

                  {projectDetailInfoGrid && (
                    <section className={`rounded-[1.35rem] border p-4 md:p-5 ${modalInfoGridCardClass}`}>
                      {projectDetailInfoGrid.eyebrow && (
                        <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${modalMutedTextClass}`}>
                          {projectDetailInfoGrid.eyebrow}
                        </p>
                      )}
                      <h4 className={`mt-2 max-w-3xl text-xl font-semibold leading-snug ${headingTextClass}`}>
                        {projectDetailInfoGrid.title}
                      </h4>
                      <p className={`mt-3 max-w-3xl text-[15px] leading-7 ${modalBodyTextClass}`}>
                        {projectDetailInfoGrid.body}
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {projectDetailInfoGrid.items.map((item) => (
                          <div
                            key={item}
                            className="rounded-[1rem] border border-cyan-400/15 bg-cyan-400/5 px-4 py-3"
                          >
                            <div className="flex items-start gap-3">
                              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                              <p className={`text-sm leading-6 ${modalBodyTextClass}`}>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </div>

                <div className={`rounded-[1.35rem] border p-5 md:p-6 xl:sticky xl:top-0 ${modalContentCardClass}`}>
                  <p className={`mb-3 text-sm leading-6 ${modalMutedTextClass}`}>{selectedProject.desc}</p>

                  <div className="space-y-3">
                    {projectDetailParagraphs.map((paragraph, index) => (
                      <p key={`${selectedProject.title}-detail-${index}`} className={`text-[15px] leading-7 md:text-[1.05rem] ${modalBodyTextClass}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {projectDetailSections.length > 0 && (
                    <div className="mt-5 space-y-4">
                      {projectDetailSections.map((section) => (
                        <section
                          key={`${selectedProject.title}-${section.title}`}
                          className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 md:p-5"
                        >
                          {section.eyebrow && (
                            <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${modalMutedTextClass}`}>
                              {section.eyebrow}
                            </p>
                          )}
                          <h4 className={`mt-2 text-lg font-semibold leading-snug ${headingTextClass}`}>
                            {section.title}
                          </h4>
                          <p className={`mt-3 text-[15px] leading-7 ${modalBodyTextClass}`}>
                            {section.body}
                          </p>
                          {section.bullets?.length ? (
                            <div className="mt-4 grid gap-2">
                              {section.bullets.map((bullet) => (
                                <div
                                  key={bullet}
                                  className="flex items-start gap-3 rounded-xl border border-cyan-400/15 bg-cyan-400/5 px-3 py-2"
                                >
                                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                                  <p className={`text-sm leading-6 ${modalBodyTextClass}`}>{bullet}</p>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </section>
                      ))}
                    </div>
                  )}

                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="glass-button mt-5 inline-flex no-print"
                    >
                      Open GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* JOURNEY */}
        <section id="journey" className="fade-in print-section py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className={`text-3xl font-bold md:text-5xl ${headingTextClass}`}>
                <span>{currentCopy.journeyTitleLead} </span>
                <span className="text-cyan-300">{currentCopy.journeyTitleAccent}</span>
              </h2>

              <p className={`mx-auto mt-4 max-w-2xl text-sm md:text-base ${bodyTextClass}`}>
                {currentCopy.journeySubtitle}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
              {currentCopy.journeyItems.map((item, index) => (
                <article
                  key={`${item.period}-${item.title}`}
                  className={`glass ${framedCardClass} rounded-[1.75rem] p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                    item.accent
                      ? "border-pink-400/40 bg-[linear-gradient(180deg,rgba(236,72,153,0.12),rgba(255,255,255,0.03))] lg:-mt-6"
                      : "border-white/10"
                  }`}
                >
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                      item.accent
                        ? "bg-pink-400/15 text-pink-200"
                        : "bg-cyan-400/10 text-cyan-200"
                    }`}
                  >
                    {item.period}
                  </span>

                  <div className="mt-6">
                    <h3 className={`text-2xl font-bold ${headingTextClass}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-2 text-sm font-medium ${bodyTextClass}`}>
                      {item.org}
                    </p>
                  </div>

                  <div className="mt-6 border-l border-white/10 pl-4">
                    <p className={`text-sm leading-7 ${bodyTextClass}`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 text-right text-xs font-semibold uppercase tracking-[0.22em] text-white/18">
                    0{index + 1}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="fade-in print-section py-24 px-6 flex justify-center">

          <div className="glass print-card contact-shell max-w-5xl w-full overflow-hidden rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="contact-panel p-8 md:p-10">
                <span className="contact-badge">
                  {currentCopy.contactBadge}
                </span>

                <h2 className={`text-3xl md:text-4xl mt-5 ${headingTextClass}`}>
                  {currentCopy.contactTitle}
                </h2>

                <p className={`mt-4 max-w-md leading-7 ${bodyTextClass}`}>
                  {currentCopy.contactBody}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                        {currentCopy.whatsappTitle}
                      </p>
                      <p className={`text-sm ${bodyTextClass}`}>{whatsappDisplay}</p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link mt-3"
                      >
                        {currentCopy.whatsappAction}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <FaLinkedin />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                        {currentCopy.linkedinTitle}
                      </p>
                      <p className={`text-sm break-all ${bodyTextClass}`}>
                        {contacts.linkedin}
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-card">
                    <div className="contact-icon">
                      <span className="text-sm font-semibold">ID</span>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-cyan-300/80">
                        {currentCopy.locationTitle}
                      </p>
                      <p className={`text-sm ${bodyTextClass}`}>
                        {currentCopy.locationValue}
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
                    <span className="contact-choice-title">{currentCopy.contactOptionWhatsapp}</span>
                    <span className="contact-choice-copy">
                      {currentCopy.contactOptionWhatsappCopy} {whatsappDisplay}
                    </span>
                  </a>

                  <div className="contact-choice-card contact-choice-card--muted">
                    <span className="contact-choice-title">{currentCopy.contactOptionEmail}</span>
                    <span className="contact-choice-copy">
                      {currentCopy.contactOptionEmailCopy}
                    </span>
                  </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <input type="hidden" name="phone" value={whatsappInput} />
                  <input type="hidden" name="no_hp" value={whatsappInput} />
                  <input type="hidden" name="nomor_hp" value={whatsappInput} />

                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="input-group">
                      <span className="input-label">{currentCopy.nameLabel}</span>
                      <input name="nama" placeholder={currentCopy.namePlaceholder} required className="input input--fancy" />
                    </label>

                    <label className="input-group">
                      <span className="input-label">{currentCopy.whatsappLabel}</span>
                      <input
                        name="whatsapp"
                        placeholder={currentCopy.whatsappPlaceholder}
                        className="input input--fancy"
                        value={whatsappInput}
                        onChange={(e) => setWhatsappInput(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="input-group">
                    <span className="input-label">{currentCopy.emailLabel}</span>
                    <input type="email" name="email" placeholder={currentCopy.emailPlaceholder} required className="input input--fancy" />
                  </label>

                  <label className="input-group">
                    <span className="input-label">{currentCopy.messageLabel}</span>
                    <textarea name="pesan" rows={5} placeholder={currentCopy.messagePlaceholder} required className="input input--fancy min-h-36 resize-none" />
                  </label>

                  <button type="submit" className="glass-button glass-button--accent glass-button--full no-print">
                    {loading ? currentCopy.sendingButton : currentCopy.sendButton}
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
