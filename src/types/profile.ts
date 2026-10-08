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
 * Interface untuk data profil utama.
 */
export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  skills: string[];
  projects: Project[];
}
