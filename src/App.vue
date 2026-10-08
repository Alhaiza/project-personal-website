<script setup lang="ts">
import { profileData } from "./data/profileData";
import Navbar from "./layouts/Navbar.vue";
import HeroSection from "./views/HeroSection.vue";
import ProjectSection from "./views/ProjectSection.vue";
</script>

<template>
  <!-- Background utama Tailwind dengan warna gelap elegan -->
  <div
    class="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white"
  >
    <Navbar />

    <main>
      <!-- Mengirimkan data profil ke komponen anak melalui props -->
      <HeroSection :profile="profileData" />
      <ProjectSection
        :projects="profileData.projects"
        :skills="profileData.skills"
      />
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
