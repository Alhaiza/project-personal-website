import type { UserProfile } from "../types/profile";

/**
 * Data statis profil yang di-typed menggunakan UserProfile.
 * Ini mensimulasikan data dari API/Database dengan tipe yang aman.
 */
export const profileData: UserProfile = {
  name: "Syarif Muhammad Alhaiza",
  role: "Fullstack Developer",
  bio: "Fokus pada efisiensi, presisi, dan penghematan token. Membangun aplikasi web modern yang responsif dan berkinerja tinggi.",
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
  skills: [
    "Vue",
    "Typescript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "PostgreSQL",
  ],
  projects: [
    {
      id: 1,
      title: "BRI Trustee Application",
      description:
        "Mengembangkan backend services, frontend interfaces, dan deployment pipelines menggunakan Kafka dan Docker.",
      tags: ["Vue", "TypeScript", "Tailwind", "Docker"],
      link: "#",
    },
    {
      id: 2,
      title: "Personal Web Project (manpro.my.id)",
      description:
        "Memelihara domain hosting, server configuration, dan optimasi performa web pribadi.",
      tags: ["Vite", "Vue", "Tailwind"],
      link: "#",
    },
  ],
};
