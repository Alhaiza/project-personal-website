/**
 * Interface untuk mendefinisikan struktur data Proyek Portofolio.
 * TypeScript menggunakan 'interface' untuk membentuk kontrak tipe data objek.
 */
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

/**
 * Interface untuk satu posisi/peran pekerjaan.
 * Digunakan untuk mendukung riwayat multi-posisi / promosi dalam satu perusahaan.
 */
export interface ExperiencePosition {
  id: number;
  role: string;
  employmentType?: string; // misal: "Contract", "Full-time"
  period: string; // misal: "Aug 2026 - Present"
  description?: string;
  technologies?: string[];
}

/**
 * Interface untuk data riwayat karir atau pengalaman kerja.
 * Mendukung single position langsung atau multi-posisi bertingkat (nested positions) seperti di LinkedIn.
 */
export interface Experience {
  id: number;
  company: string;
  location?: string; // misal: "Semarang, Central Java, Indonesia"
  workplaceType?: string; // misal: "On-site", "Remote", "Hybrid"
  // Format single position langsung (backward compatible)
  role?: string;
  period?: string;
  description?: string;
  technologies?: string[];
  // Format multi-posisi dalam 1 perusahaan yang sama (hierarchical/nested)
  positions?: ExperiencePosition[];
}

/**
 * Interface untuk validasi state interaktif formulir kontak.
 * Memastikan payload input memiliki tipe string yang pasti.
 */
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

/**
 * Interface untuk data profil utama.
 */
export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  projects: Project[];
  experiences: Experience[];
}
