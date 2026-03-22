  "use client";

  import { useEffect, useState, useRef } from "react";
  import Navbar from "../components/Navbar";
  import emailjs from "emailjs-com";
  import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

  // 1. DEFINISI INTERFACE (Tipografi yang lebih baik)
  interface Project {
    title: string;
    desc: string;
    img: string;
    detail: string;
  }

  // 2. DATA STATIS (Dipindahkan keluar komponen agar tidak di-recreate)
  const projects: Project[] = [
    {  
      title: "Klasifikasi Rumah",
      desc: "Model ML untuk menentukan rumah tidak layak huni.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      detail: "Menggunakan Machine Learning untuk klasifikasi rumah berdasarkan kondisi.",
    },
    {
      title: "YOLO Object Detection",
      desc: "Deteksi objek real-time menggunakan YOLO & OpenCV.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      detail: "Implementasi YOLOv3 untuk deteksi objek real-time menggunakan OpenCV.",
    },
    {
      title: "IoT Budidaya Ikan",
      desc: "Monitoring pH dan suhu air berbasis IoT.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      detail: "Sistem monitoring berbasis sensor untuk budidaya ikan.",
    },
    {
      title: "Project Tambahan",
      desc: "Contoh project lain di portfolio.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      detail: "Project tambahan sebagai showcase kemampuan.",
    },
  ];

  const roles = [
    "Data Analyst",
    "Machine Learning Engineer",
    "Computer Vision",
    "IoT Developer",
  ];

  const texts = [
    "Saya membantu bisnis mengubah ide menjadi solusi digital.",
    "Saya membangun sistem berbasis AI dan Computer Vision.",
    "Saya fokus pada Data Analyst & Machine Learning.",
  ];

  export default function Home() {
    const form = useRef<HTMLFormElement>(null);
    
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
      <main suppressHydrationWarning className="relative min-h-screen text-white">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-black"></div>

          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-blob top-[-100px] left-[-100px]"></div>

          <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] animate-blob animation-delay-2000 bottom-[-100px] right-[-100px]"></div>

          <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-blob animation-delay-4000 top-[50%] left-[30%]"></div>
        </div>

        <div className="fixed inset-0 bg-black/40 -z-10"></div>

        <Navbar />

        {/* HERO MODERN */}
        <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-28 md:pt-0px-6 md:px-20 gap-10">

          {/* LEFT */}
          <div className="max-w-xl">

            <p className="text-gray-400 tracking-widest mb-2">
              HALO, SAYA
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Eduardus Gerry Henri
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

              <a href="https://github.com/Gerryhenri" target="_blank">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/eduardus-gerry-henri-2453442a9" target="_blank">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/eduardus_gerry?igsh=MWNjNjZmY2JjNmpkNw==" target="_blank">
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
                className="w-[300px] h-[400px] object-cover rounded-xl"
              />
              
            </div>

          </div>

        </section>

        {/* 🔽 SECTION LAIN TETAP */}

        {/* ABOUT */}
        <section id="about" className="fade-in py-24 px-6 flex justify-center">
          <div className="max-w-5xl w-full glass p-10 rounded-2xl">

            <div className="grid md:grid-cols-2 gap-10 items-center">

              <img
                src="/images/miror.jpeg"
                className="w-56 h-56 object-cover rounded-xl mx-auto"
              />

              <div>
                <h2 className="text-3xl font-semibold mb-6">
                  Tentang Saya
                </h2>
                <p className="text-gray-300">
                  Data Analyst fokus Machine Learning & Computer Vision.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="fade-in py-20 px-6 flex justify-center">
          <div className="max-w-5xl w-full">

            <h2 className="text-3xl font-bold text-center mb-10">
              Keahlian
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">

              {[
                { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Excel", img: "https://img.icons8.com/color/48/microsoft-excel-2019.png" },
                { name: "Looker Studio", img: "https://img.icons8.com/color/48/google-data-studio.png" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="relative group glass p-6 rounded-xl flex items-center justify-center hover-soft cursor-pointer"
                >
                  <img src={s.img} className="w-10 h-10" />

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
  <section id="projects" className="fade-in py-20 px-6">
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
            className="mt-3 w-fit px-4 py-1.5 text-sm 
                      bg-gradient-to-r from-blue-500 to-cyan-400 
                      rounded-full 
                      transition-all duration-300 hover:scale-105"
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
                className="text-xs px-3 py-1 
                          bg-cyan-500 rounded-full
                          transition-all duration-300 hover:scale-105"
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
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 p-6 rounded-xl max-w-lg w-full"
            >
              <img src={selectedProject.img} className="rounded mb-4" />
              <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              <p className="text-gray-400">{selectedProject.detail}</p>
            </div>
          </div>
        )}

        {/* CONTACT */}
        <section id="contact" className="fade-in py-24 px-6 flex justify-center">

          <div className="glass p-10 rounded-2xl max-w-4xl w-full">

            <h2 className="text-3xl text-center mb-6">
              Contact
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input name="nama" placeholder="Nama" required className="input" />
              <input type="email" name="email" placeholder="Email" required className="input" />
              <textarea name="pesan" rows={4} placeholder="Pesan..." required className="input" />

              <button className="btn">
                {loading ? "Mengirim..." : "Kirim"}
              </button>

            </form>

          </div>
        </section>

        {/* 🔥 BACK TO TOP */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition"
          >
            ↑
          </button>
        )}

      </main>
    );
  }