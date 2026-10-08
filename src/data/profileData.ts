import type { UserProfile } from "../types/profile";

/**
 * Data statis profil yang di-typed menggunakan UserProfile.
 * Ini mensimulasikan data dari API/Database dengan tipe yang aman.
 */
export const profileData: UserProfile = {
  name: "Syarif Muhammad Alhaiza",
  role: "Backend & Web Developer",
  bio: "Bachelor of Computer Science graduate and Web Developer experienced in building reliable, scalable web applications using PHP, Laravel, TypeScript, and Docker. Strong focus on structured backend architecture, modern UI, and clean code.",
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
        "Web-based platform designed to streamline internship workflows for students, faculty, and company supervisors. Features online document submission and approvals, milestone tracking, and centralized communication containerized with Docker.",
      tags: ["Laravel", "PHP", "JavaScript", "Bootstrap CSS", "Docker", "Git"],
      link: "#",
    },
    {
      id: 2,
      title: "Informatics UNTAN Laboratory Inventory App with QR Code",
      description:
        "Web-based inventory tracking application featuring automated QR code tagging for lab assets, Role-Based Access Control (Admin & Superadmin), and enhanced data transparency.",
      tags: ["PHP", "Laravel", "MySQL", "QR Code", "JavaScript"],
      link: "#",
    },
    {
      id: 3,
      title: "Personal Web Portfolio & Frontend Knowledge Hub",
      description:
        "Professional web profile and frontend cheatsheet engineered with Vue 3 Composition API, Vite, TypeScript, and Tailwind CSS v4 featuring modular layered architecture.",
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
            "Engineered responsive UI interfaces and robust backend services end-to-end, maintaining uniform data pipelines, high rendering performance, and scalable system modules.",
          technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "Laravel", "PostgreSQL", "Docker"],
        },
        {
          id: 102,
          role: "Back End Developer",
          employmentType: "Contract",
          period: "Aug 2025 - Aug 2026",
          description:
            "Architected structured backend microservices, performant REST APIs, database schemas, and query optimization across the Laravel ecosystem.",
          technologies: ["Laravel", "PHP", "Back-End Web Development", "PostgreSQL", "Docker", "Git"],
        },
      ],
    },
    {
      id: 2,
      company: "Jurusan Informatika Universitas Tanjungpura",
      role: "Web Developer (Project-Based)",
      period: "Nov 2024 - Jul 2025",
      description:
        "Developed a web-based internship management system for students, faculty, and supervisors. Implemented online document approvals, task tracking, and application containerization via Docker.",
      technologies: ["Laravel", "PHP", "Blade", "HTML/CSS", "Docker", "Git"],
    },
    {
      id: 3,
      company: "PT. Inovasi Hijau Sangkabira",
      role: "Full-Stack Web Developer Intern",
      period: "Mar 2024 - May 2024",
      description:
        "Developed user-friendly interfaces with JavaScript and server-side applications using Laravel. Maintained database integrity with PostgreSQL and implemented dynamic CRUD modules for admin dashboards.",
      technologies: ["Laravel", "PostgreSQL", "JavaScript", "HTML/CSS", "Git"],
    },
    {
      id: 4,
      company: "Jurusan Informatika Universitas Tanjungpura",
      role: "Web Developer Internship",
      period: "Sep 2023 - Nov 2023",
      description:
        "Built an inventory tracking web application using PHP, designed relational MySQL database schemas, and integrated asset data scanning workflows.",
      technologies: ["PHP", "MySQL", "JavaScript", "Git"],
    },
  ],
};
