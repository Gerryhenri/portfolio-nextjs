// lib/portfolio-data.ts

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

// Hanya satu definisi Credential dengan id
export interface Credential {
  id: string;
  title: string;
  file: string;
  accent?: boolean;
  date?: string;
  issuer?: string;
}

export const profile = {
  name: "Eduardus Gerry Henri",
  title: "Data Analyst",
  about:
    "Data Analyst dengan fokus pada machine learning, computer vision, dan pengembangan solusi digital berbasis data.",
  summary:
    "Saya memiliki latar belakang Teknik Informatika dengan pengalaman pada analisis data, machine learning, computer vision, dan pengembangan sistem IoT. Saya terbiasa mengolah data menjadi insight, membangun model, serta membuat solusi digital yang rapi, aplikatif, dan mudah digunakan.",
};

export const roles = [
  "Data Analyst",
  "Machine Learning Engineer",
  "Computer Vision",
  "AI Enthusiast",
];

export const texts = [
  "Saya mengolah data menjadi insight dan solusi yang lebih mudah digunakan.",
  "Saya membangun model machine learning, dashboard, dan sistem computer vision.",
  "Saya tertarik pada project yang menghubungkan data, AI, dan IoT.",
];

export const projects: Project[] = [
  {
    title: "Klasifikasi Rumah",
    desc: "Model ML untuk menentukan rumah tidak layak huni.",
    img: "/images/project/ML.png",
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
    repoUrl: "https://github.com/Gerryhenri/ML_RTLH",
  },
  {
    title: "ROBOTIC",
    desc: "Robot pemadam kebakaran berbasis ESP32 yang dikendalikan lewat smartphone.",
    img: "/images/project/rbt.png",
    detail:
      "Robot mobil pemadam kebakaran berbasis ESP32 dengan kontrol Bluetooth dan pompa air mini.",
    details: [
      "Project ini merupakan robot pemadam kebakaran berbasis ESP32 yang dapat dikendalikan melalui smartphone menggunakan koneksi Bluetooth.",
    ],
    detailInfoGrid: {
      eyebrow: "Fokus Project",
      title: "Sistem dirancang untuk menggerakkan robot dan mengaktifkan semprotan air secara nirkabel.",
      body: "ESP32 menjadi pusat kendali untuk menerima perintah dari smartphone, mengatur pergerakan motor, dan menyalakan pompa air melalui relay.",
      items: [
        "ESP32",
        "L298N Motor Driver",
        "Pompa air mini dan relay",
        "Baterai 18650",
      ],
    },
    detailSections: [
      {
        eyebrow: "Deskripsi Singkat",
        title: "Robot ini dibuat untuk simulasi pemadaman kebakaran skala mini secara jarak jauh.",
        body: "Pengguna dapat mengontrol arah gerak robot dari smartphone, lalu mengaktifkan pompa air untuk menyemprotkan air ke titik target.",
      },
      {
        eyebrow: "Nilai Project",
        title: "Project ini menunjukkan integrasi kontrol mobile, sistem embedded, dan aktuator dalam satu perangkat.",
        body: "Fokus utamanya ada pada respons kendali Bluetooth, kestabilan gerak robot, dan koordinasi antara motor DC, relay, serta pompa air mini.",
      },
    ],
    detailImages: ["/images/project/robotic.png"],
    repoUrl: "https://github.com/Gerryhenri/robotic",
  },
  {
    title: "RevoU Data Analytics",
    desc: "Analisis data penjualan Superstore dan dashboard interaktif RevoU x MSIB.",
    img: "/images/project/logorevo.png",
    detail:
      "Project Studi Independen RevoU x MSIB untuk analisis data penjualan Superstore dan pembuatan dashboard interaktif berbasis Looker Studio.",
    details: [
      "Project ini merupakan bagian dari Studi Independen RevoU x MSIB yang berfokus pada analisis data penjualan Superstore dan pembuatan dashboard interaktif. Dashboard dikembangkan menggunakan Looker Studio dan diintegrasikan ke web berbasis Next.js, HTML, CSS, dan JavaScript, lalu dideploy melalui Vercel. dan link visualisasi menggunakan Looker Studio yaitu; https://lookerstudio.google.com/reporting/970a598d-51d8-42a6-b158-037c01d7ed29/page/mKowD.",
    ],
    detailInfoGrid: {
      eyebrow: "Fokus Dashboard",
      title: "Dashboard dirancang untuk membantu membaca performa penjualan dan profit secara lebih cepat.",
      body: "Visualisasi menampilkan metrik utama dan temuan analitik yang mendukung pengambilan keputusan bisnis secara lebih terarah.",
      items: [
        "Sales",
        "Discount",
        "Profit Margin",
        "Customer Lifetime Value (CLV)",
      ],
    },
    detailSections: [
      {
        eyebrow: "Insight Utama",
        title: "Analisis menunjukkan diskon tidak memberi dampak signifikan terhadap kenaikan penjualan.",
        body: "Dari hasil eksplorasi data, kategori Technology dan Office Supplies justru memberikan profit margin tertinggi. Temuan ini membantu mengarahkan fokus bisnis ke kategori yang lebih sehat secara profitabilitas.",
        bullets: [
          "Discount tidak signifikan meningkatkan sales",
          "Technology memiliki profit margin tinggi",
          "Office Supplies juga menunjukkan margin yang kuat",
        ],
      },
      {
        eyebrow: "Masalah & Solusi",
        title: "Penurunan profit sebesar 2% menjadi dasar penyusunan rekomendasi strategi.",
        body: "Solusi difokuskan pada optimalisasi strategi marketing dan peningkatan nilai transaksi pelanggan, termasuk mendorong pembelian pada kategori yang lebih menguntungkan dan memperkuat pendekatan berbasis customer value.",
      },
    ],
    detailImages: ["/images/project/revou.png"],
    repoUrl: "https://github.com/Gerryhenri",
  },
  {
    title: "Riset Deteksi Objek BRIN",
    desc: "Website tracker mobil yang dibuat saat program magang di BRIN.",
    img: "/images/project/brin.png",
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
    repoUrl: "https://github.com/Gerryhenri/BRIN_car",
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

// Credentials data - Hanya satu definisi
export const credentials: Credential[] = [
  {
    id: "1",
    title: "HKI Sistem Pakar",
    file: "/images/sertifikat/HKI.pdf",
    accent: true,
  },
  {
    id: "2",
    title: "Seminar Nasional",
    file: "/images/sertifikat/semnas.pdf",
  },
  {
    id: "3",
    title: "Sertifikat BINKAR",
    file: "/images/sertifikat/binkar.pdf",
  },
  {
    id: "4",
    title: "Sertifikat BRIN",
    file: "/images/sertifikat/brin.pdf",
  },
  {
    id: "5",
    title: "Sertifikat MBKM BRIN 2024",
    file: "/images/sertifikat/brin2.pdf",
  },
  {
    id: "6",
    title: "Stupen Data Analytics",
    file: "/images/sertifikat/DA.pdf",
  },
];

export const contacts = {
  github: "https://github.com/Gerryhenri",
  linkedin: "https://www.linkedin.com/in/eduardus-gerry-henri-2453442a9",
  instagram: "https://www.instagram.com/eduardus_gerry?igsh=MWNjNjZmY2JjNmpkNw==",
  whatsapp: "6285345349665",
};