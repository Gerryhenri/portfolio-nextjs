export interface ProjectDetailSection {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
}

export interface ProjectInfoGrid {
  eyebrow?: string;
  title: string;
  body: string;
  items: string[];
}

export interface Project {
  title: string;
  desc: string;
  img: string;
  detail: string;
  details?: string[];
  detailInfoGrid?: ProjectInfoGrid;
  detailSections?: ProjectDetailSection[];
  detailImages?: string[];
  repoUrl?: string;
}

export const profile = {
  name: "Eduardus Gerry Henri",
  title: "Data Analyst",
  about: "Data Analyst fokus Machine Learning & Computer Vision.",
  summary:
    "Saya membantu mengubah ide menjadi solusi digital berbasis data. Pengalaman saya berfokus pada analisis data, implementasi model machine learning, dan pengembangan sistem computer vision serta IoT yang mudah digunakan.",
};

export const roles = [
  "Data Analyst",
  "Machine Learning Engineer",
  "Computer Vision",
  "IoT Developer",
];

export const texts = [
  "Saya membantu bisnis mengubah ide menjadi solusi digital.",
  "Saya membangun sistem berbasis AI dan Computer Vision.",
  "Saya fokus pada Data Analyst & Machine Learning.",
];

export const projects: Project[] = [
  {
    title: "Klasifikasi Rumah",
    desc: "Model ML untuk menentukan rumah tidak layak huni.",
    img: "/images/project/RTLH.png",
    detail:
      "Menggunakan Machine Learning untuk klasifikasi rumah berdasarkan kondisi.",
    details: [
      "Sistem ini mengklasifikasikan Rumah Tidak Layak Huni (RTLH) menggunakan kombinasi Polynomial Feature Engineering dan Gradient Boosting Classification (GBC). Data dari Excel diproses menggunakan Python, kemudian dilakukan training dan evaluasi model untuk menghasilkan prediksi yang akurat.",
    ],
    detailInfoGrid: {
      eyebrow: "Apa itu RTLH?",
      title: "Rumah Tidak Layak Huni adalah hunian yang belum memenuhi standar kelayakan dasar untuk ditinggali.",
      body: "Penilaiannya tidak hanya dilihat dari kondisi bangunan, tetapi juga dari aspek kesehatan, keamanan, kenyamanan, dan kualitas lingkungan di sekitarnya.",
      items: [
        "Struktur bangunan rusak atau rapuh",
        "Tidak memiliki sanitasi yang baik",
        "Ventilasi dan pencahayaan kurang",
        "Kondisi lingkungan tidak sehat",
      ],
    },
    detailSections: [
      {
        eyebrow: "Deskripsi Singkat",
        title: "Pipeline klasifikasi RTLH yang fokus pada akurasi dan keterbacaan hasil.",
        body: "Alur kerja dimulai dari pengolahan data Excel dengan Python, dilanjutkan preprocessing, pembentukan fitur polynomial, training model Gradient Boosting, lalu evaluasi performa untuk memastikan prediksi tetap konsisten dan dapat diandalkan.",
      },
      {
        eyebrow: "Keunggulan Model",
        title: "Kombinasi Polynomial + GBC membantu menangkap hubungan fitur yang lebih kompleks.",
        body: "Pendekatan ini memberikan performa yang lebih kuat dibanding model yang hanya bergantung pada fitur dasar, sehingga hasil klasifikasi menjadi lebih stabil saat diuji pada beberapa metrik evaluasi.",
        bullets: [
          "Akurasi lebih tinggi, sekitar 99%",
          "Precision, Recall, dan F1-score lebih stabil",
          "Hasil Cross Validation tetap konsisten",
        ],
      },
    ],
    detailImages: ["/images/project/RTLH.png"],
    repoUrl: "https://github.com/Gerryhenri",
  },
  {
    title: "YOLO Object Detection",
    desc: "Deteksi objek real-time menggunakan YOLO & OpenCV.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    detail:
      "Implementasi YOLOv3 untuk deteksi objek real-time menggunakan OpenCV.",
    repoUrl: "https://github.com/Gerryhenri",
  },
  {
    title: "IoT Budidaya Ikan",
    desc: "Monitoring pH dan suhu air berbasis IoT.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    detail: "Sistem monitoring berbasis sensor untuk budidaya ikan.",
    repoUrl: "https://github.com/Gerryhenri",
  },
  {
    title: "Riset BRIN",
    desc: "Website tracker mobil yang dibuat saat program magang di BRIN.",
    img: "/images/project/tracker.png",
    detail: "Pengembangan website tracker mobil untuk menampilkan pemantauan kendaraan secara lebih jelas dan terstruktur.",
    details: [
      "Project ini dikerjakan saat program magang di BRIN, dengan tugas utama membuat website untuk tracker mobil seperti pada tampilan skema di atas.",
    ],
    detailInfoGrid: {
      eyebrow: "Program Magang BRIN",
      title: "Website tracker mobil yang dirancang untuk membantu visualisasi dan pemantauan data kendaraan.",
      body: "Fokus pekerjaan saya adalah membangun tampilan web yang rapi, informatif, dan mudah dipahami untuk kebutuhan monitoring kendaraan dalam konteks riset.",
      items: [
        "Magang di BRIN, Cisitu Bandung",
        "Pusat Riset Telekomunikasi",
        "Membuat website tracker mobil",
        "Fokus pada tampilan monitoring yang informatif",
      ],
    },
    detailSections: [
      {
        eyebrow: "Peran Saya",
        title: "Mendesain dan membangun antarmuka website untuk kebutuhan tracking kendaraan.",
        body: "Kontribusi utama saya ada pada pengembangan website, penyusunan tampilan informasi, dan penyesuaian alur visual agar data tracker lebih mudah dipantau oleh pengguna.",
        bullets: [
          "Membuat tampilan website tracker mobil",
          "Menyusun layout monitoring agar lebih jelas",
          "Menyesuaikan informasi agar mudah dibaca pengguna",
        ],
      },
      {
        eyebrow: "Tentang BRIN",
        title: "Lingkungan riset yang memberi pengalaman kerja pada project teknologi nyata.",
        body: "Program magang ini memberi pengalaman langsung dalam mengerjakan project berbasis teknologi di lingkungan riset nasional, khususnya pada bidang telekomunikasi dan sistem monitoring.",
      },
    ],
    detailImages: ["/images/project/tracker.png"],
    repoUrl: "https://github.com/Gerryhenri",
  },
];

export const skillItems = [
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "VS Code",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Laravel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Git",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Machine Learning",
    img: "https://img.icons8.com/color/48/artificial-intelligence.png",
  },
  {
    name: "Deep Learning",
    img: "/images/deep-learning.svg",
  },
  {
    name: "Data Analytics",
    img: "https://img.icons8.com/color/48/combo-chart.png",
  },
  {
    name: "Data Cleaning",
    img: "https://img.icons8.com/color/48/data-configuration.png",
  },
  {
    name: "Excel",
    img: "https://img.icons8.com/color/48/microsoft-excel-2019.png",
  },
  {
    name: "Looker Studio",
    img: "https://img.icons8.com/color/48/google-data-studio.png",
  },
  {
    name: "Canva",
    img: "https://img.icons8.com/color/48/canva.png",
  },
  {
    name: "CapCut",
    img: "/images/capcut.svg",
  },
];

export const cvSkills = [
  "Data Analysis",
  "Machine Learning",
  "Computer Vision",
  "IoT Development",
  "Next.js",
  "Laravel",
  "Python",
  "JavaScript",
];

export const contacts = {
  github: "https://github.com/Gerryhenri",
  linkedin: "https://www.linkedin.com/in/eduardus-gerry-henri-2453442a9",
  instagram: "https://www.instagram.com/eduardus_gerry?igsh=MWNjNjZmY2JjNmpkNw==",
  whatsapp: "6285345349665",
};





