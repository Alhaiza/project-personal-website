# Project Documentation & Architecture Blueprint: Personal Website

Dokumentasi arsitektur, modul teknis, dan cheatsheet pembelajaran frontend untuk proyek personal website Syarif Muhammad Alhaiza (SA).

---

## 1. Arsitektur & Struktur Proyek

Proyek ini dibangun menggunakan arsitektur modular Vue 3 Single File Component (SFC) dengan TypeScript strict typing dan Tailwind CSS v4.

```text
personal-website/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Assets terkompilasi (gambar, ikon SVG)
│   ├── components/         # Komponen UI reusable skala kecil (Atoms/Molecules)
│   │   ├── TimelineItem.vue # [Baru] Atom item timeline experience
│   │   └── ToastNotification.vue # [Baru] Feedback notification
│   ├── data/               # Single Source of Truth / Static Mock Database
│   │   └── profileData.ts  # Dataset profil, proyek, skill, dan pengalaman
│   ├── layouts/            # Kerangka tata letak halaman global
│   │   └── Navbar.vue      # Sticky header dengan navigasi smooth scroll
│   ├── types/              # Deklarasi kontrak tipe data TypeScript global
│   │   └── profile.ts      # Interface Project, Experience, Contact, UserProfile
│   ├── views/              # Komponen section halaman utama (Organisms)
│   │   ├── HeroSection.vue       # Banner profil & intro singkat
│   │   ├── ExperienceSection.vue # [Baru] Timeline riwayat karir/proyek
│   │   ├── ProjectSection.vue    # Grid showcase portofolio & skills
│   │   └── ContactSection.vue    # [Baru] Form interaktif & validasi TS
│   ├── App.vue             # Parent orchestrator / root application
│   ├── main.ts             # Entry point inisialisasi aplikasi Vue
│   └── style.css           # Konfigurasi entry @import "tailwindcss" (v4)
├── index.html              # HTML Shell host
├── package.json            # Daftar dependensi & scripts
├── tsconfig.json           # Konfigurasi TypeScript global
└── vite.config.ts          # Konfigurasi bundler Vite + Tailwind Plugin
```

---

## 2. Daftar Dependensi & Library Utama

| Package | Versi | Peran Teknis |
| :--- | :--- | :--- |
| `vue` | `^3.5.42` | Frontend framework reaktif berbasis Virtual DOM & Composition API |
| `tailwindcss` | `^4.3.3` | Utility-first CSS engine v4 tanpa legacy postcss config |
| `@tailwindcss/vite` | `^4.3.3` | Integrasi native Tailwind engine langsung ke Vite pipeline |
| `typescript` | `~6.0.2` | Static type checking dan type safety interface |
| `vite` | `^8.3.0` | Next generation frontend tooling & development server HMR |
| `vue-tsc` | `^3.3.11` | Type checking khusus template Vue SFC untuk production build |

---

## 3. Konfigurasi Environment (`.env`)

Proyek saat ini murni berbasis client-side static rendering dan mock dataset. Jika ke depannya diintegrasikan dengan email backend / Formspree / backend microservice:

```env
# Contoh konfigurasi masa depan (opsional)
VITE_API_BASE_URL=https://api.manpro.my.id
VITE_CONTACT_FORM_ENDPOINT=/api/v1/contact
```

---

## 4. Panduan Menjalankan Proyek

```bash
# 1. Instalasi dependensi
npm install

# 2. Menjalankan development server (dengan Vite HMR)
npm run dev

# 3. Type-check & Production Build
npm run build

# 4. Preview hasil build produksi
npm run preview
```

---

## 5. System Modules, Features, & Data Flow Mapping

### A. Modul Fungsional & Distribusi Data (Props Down, Events Up)

1. **Root Orchestrator (`App.vue`)**
   - **Tanggung Jawab:** Mengimpor `profileData` dan mendistribusikan potongan state ke child views via props binding.
   - **Data Flow:** `src/data/profileData.ts` ➡️ `App.vue` ➡️ `[HeroSection, ExperienceSection, ProjectSection, ContactSection]`.

2. **Hero & Intro Module (`HeroSection.vue`)**
   - **Data Input (Props):** `profile: UserProfile`
   - **Fungsi:** Menampilkan foto avatar, nama, role, dan call-to-action ke contact/proyek.

3. **Experience Timeline Module (`ExperienceSection.vue` & `TimelineItem.vue`)**
   - **Data Input (Props):** `experiences: Experience[]`
   - **Struktur Hierarki Data:** Mendukung format *single role* langsung maupun *nested positions* (`positions?: ExperiencePosition[]`) untuk merepresentasikan transisi atau promosi jabatan dalam satu perusahaan yang sama (mirip arsitektur timeline LinkedIn).
   - **Fungsi:** Visualisasi vertikal perjalanan karir/proyek dengan format informasi yang seragam dan seimbang (nama perusahaan, role, badge range tanggal terstandarisasi, deskripsi fungsional, dan tag teknologi), tanpa disparitas informasi seperti lokasi atau kalkulasi durasi parsial.

4. **Showcase Projects Module (`ProjectSection.vue`)**
   - **Data Input (Props):** `projects: Project[]`, `skills: string[]`
   - **Fungsi:** Render kartu proyek interaktif dan chip stack keahlian.

5. **Interactive Contact Form (`ContactSection.vue`)**
   - **State Lokal:** `contactForm: ContactMessage` (reaktif via `ref`)
   - **Validasi:** `errors: Record<keyof ContactMessage, string>` dengan aturan validasi TypeScript presisi (format email, panjang pesan minimum).
   - **Event Flow:** Menangani submit lokal, menampilkan transisi pesan sukses/gagal, dan reset state form.

---

## 6. Impact Isolation Matrix

| Skenario | Kasus | Penanganan Sistem |
| :--- | :--- | :--- |
| **Positive Case** | Data lengkap, form diisi valid | Tampilan dirender mulus, form menampilkan state sukses, transisi fade-in berjalan. |
| **Negative Case** | Input form kosong / email tidak valid | TypeScript validator mendeteksi error sebelum submit, pesan kesalahan merah muncul di bawah field terkait. |
| **Edge Case** | Array `experiences` atau `projects` kosong `[]` | Komponen menggunakan `v-if="items.length"` dengan fallback empty state informatif. |
| **Anomaly Case** | Nilai string ekstrem (deskripsi sangat panjang) | Utility classes `break-words`, `line-clamp`, dan `leading-relaxed` mencegah overflow UI layout. |
