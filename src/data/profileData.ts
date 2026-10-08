import type { UserProfile } from "../types/profile";

/**
 * Data statis profil yang di-typed menggunakan UserProfile.
 * Ini mensimulasikan data dari API/Database dengan tipe yang aman.
 */
export const profileData: UserProfile = {
  name: "Syarif Muhammad Alhaiza",
  role: "Backend & Web Developer",
  bio: "Bachelor of Computer Science graduate dan Web Developer berpengalaman dalam membangun sistem web andal dan scalable menggunakan PHP, Laravel, TypeScript, serta Docker. Berfokus pada arsitektur backend terstruktur, UI modern, dan clean code.",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  skills: [
    "PHP",
    "Laravel",
    "JavaScript",
    "Node.js",
    "Vue 3",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
  ],
  projects: [
    {
      id: 1,
      title: "Informatics UNTAN Internship Management App",
      description:
        "Platform web manajemen magang untuk menyederhanakan alur kerja mahasiswa, dosen, dan supervisor. Dilengkapi fitur persetujuan dokumen online, task tracking, serta komunikasi terpusat yang diintegrasikan dengan Docker.",
      tags: ["Laravel", "PHP", "JavaScript", "Bootstrap CSS", "Docker", "Git"],
      link: "#",
    },
    {
      id: 2,
      title: "Informatics UNTAN Laboratory Inventory App with QR Code",
      description:
        "Sistem inventaris laboratorium berbasis web dengan pelacakan aset menggunakan QR code unik, manajemen hak akses berbasis peran (RBAC Admin & Superadmin), dan peningkatan akuntabilitas data.",
      tags: ["PHP", "Laravel", "MySQL", "QR Code", "JavaScript"],
      link: "#",
    },
    {
      id: 3,
      title: "Personal Web Portfolio & Knowledge Hub",
      description:
        "Situs profil profesional dan cheatsheet frontend berbasis Vue 3 Composition API, Vite, TypeScript, dan Tailwind CSS v4 dengan pemisahan lapisan arsitektur modular.",
      tags: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
      link: "#",
    },
  ],
  experiences: [
    {
      id: 1,
      company: "PT Dynamic Talenta Navigator",
      positions: [
        {
          id: 101,
          role: "Fullstack Developer",
          employmentType: "Contract",
          period: "Aug 2026 - Present",
          description:
            "Mengembangkan antarmuka interaktif dan arsitektur backend end-to-end, memastikan konsistensi alur data, performa rendering tinggi, dan skalabilitas modul sistem.",
          technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Laravel", "PostgreSQL", "Docker"],
        },
        {
          id: 102,
          role: "Back End Developer",
          employmentType: "Contract",
          period: "Aug 2025 - Aug 2026",
          description:
            "Mengembangkan layanan backend terstruktur, arsitektur API efisien, manajemen basis data, serta optimalisasi query menggunakan ekosistem Laravel.",
          technologies: ["Laravel", "PHP", "Back-End Web Development", "PostgreSQL", "Docker", "Git"],
        },
      ],
    },
    {
      id: 2,
      company: "Jurusan Informatika Universitas Tanjungpura",
      role: "Web Developer (Project-Based)",
      period: "November 2024 - Juli 2025",
      description:
        "Membangun sistem manajemen magang berbasis web untuk mahasiswa, staf pengajar, dan pembimbing. Menerapkan pengajuan dan persetujuan dokumen online, tracking tugas, serta kontainerisasi aplikasi menggunakan Docker.",
      technologies: ["Laravel", "PHP", "Blade", "HTML/CSS", "Docker", "Git"],
    },
    {
      id: 3,
      role: "Full-Stack Web Developer Intern",
      company: "PT. Inovasi Hijau Sangkabira",
      period: "Maret 2024 - Mei 2024",
      description:
        "Membangun aplikasi server-side Laravel dan antarmuka interaktif, mengelola integritas data PostgreSQL, serta mengimplementasikan modul CRUD dinamis untuk dashboard admin.",
      technologies: ["Laravel", "PostgreSQL", "JavaScript", "HTML/CSS", "Git"],
    },
    {
      id: 4,
      role: "Web Developer Internship",
      company: "Jurusan Informatika Universitas Tanjungpura",
      period: "September 2023 - November 2023",
      description:
        "Mengembangkan aplikasi pelacakan inventaris menggunakan PHP, merancang skema basis data MySQL, serta membangun modul entri dan scanning data.",
      technologies: ["PHP", "MySQL", "JavaScript", "Git"],
    },
  ],
};
