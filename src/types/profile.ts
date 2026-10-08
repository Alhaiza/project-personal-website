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
 * Interface untuk data riwayat karir atau pengalaman kerja.
 * Digunakan pada modul timeline (ExperienceSection).
 */
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
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
