<script setup lang="ts">
/**
 * ============================================================================
 * [ALUR DATA 1: SUMBER DATA (DATA SOURCE)]
 * Mengimpor 'profileData' mentah dari file eksternal (src/data/profileData.ts).
 * Data ini bertindak sebagai *Mock Database* atau sumber data statis aplikasi.
 * ============================================================================
 */
import { profileData } from "./data/profileData";

/**
 * ============================================================================
 * [ALUR DATA 2: KOMPONEN STRUKTUR & TAMPILAN]
 * Mengimpor komponen layout dan views yang akan merender data tersebut ke UI.
 * ============================================================================
 */
import Navbar from "./layouts/Navbar.vue";
import HeroSection from "./views/HeroSection.vue";
import ExperienceSection from "./views/ExperienceSection.vue";
import ProjectSection from "./views/ProjectSection.vue";
import ContactSection from "./views/ContactSection.vue";
</script>

<template>
  <!-- Background utama Tailwind dengan warna gelap elegan -->
  <div
    class="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white"
  >
    <Navbar />

    <main>
      <!--
        ============================================================================
        [ALUR DATA 3: PENGIRIMAN DATA (PROPS DOWN)]
        - Data 'profileData' yang diimpor di atas diteruskan ke komponen anak (<HeroSection>)
          menggunakan prop binding ':profile="profileData"'.
        - Di dalam komponen HeroSection, data ini diterima dan di-unpack sesuai tipe 'UserProfile'.
        ============================================================================
      -->

      <!-- Mengirimkan data profil ke komponen anak melalui props -->
      <HeroSection :profile="profileData" />

      <!--
        ============================================================================
        [ALUR DATA 4: PENGIRIMAN DATA EXPERIENCES]
        - Mengirim array 'profileData.experiences' ke <ExperienceSection> via props binding.
        - Komponen ini merender timeline perjalanan karir dan proyek.
        ============================================================================
      -->
      <ExperienceSection :experiences="profileData.experiences" />

      <!--
        ============================================================================
        [ALUR DATA 5: DISTRIBUSI SELEKTIF DATA]
        - Proyek dan skill diambil spesifik dari properti di dalam 'profileData'.
        - Dikirim ke <ProjectSection> melalui props ':projects' dan ':skills'.
        - Ini memastikan pemisahan tugas (separation of concerns): komponen anak
          hanya menerima data yang benar-benar dibutuhkannya saja.
        ============================================================================
      -->
      <ProjectSection
        :projects="profileData.projects"
        :skills="profileData.skills"
      />

      <!--
        ============================================================================
        [ALUR DATA 6: FORMULIR INTERAKTIF (STATEFUL VIEW)]
        - <ContactSection> mengelola state input dan validasi TypeScript secara lokal.
        - Menyajikan feedback visual interaktif tanpa memerlukan props eksternal.
        ============================================================================
      -->
      <ContactSection />
    </main>

    <footer
      class="py-8 text-center text-slate-600 text-sm border-t border-slate-900 mt-12"
    >
      <p>
        © 2026 Syarif Muhammad Alhaiza. Built with Vue 3, TypeScript & Tailwind
        CSS.
      </p>
    </footer>
  </div>
</template>
