<script setup lang="ts">
import { defineProps } from "vue";
import type { UserProfile } from "../types/profile";
/**
 * Konsep Dasar Vue 3: defineProps
 * - Digunakan untuk menerima data (props) dari komponen induk (App.vue).
 * - Dengan TypeScript, kita memberikan tipe data 'UserProfile' secara eksplisit.
 */
defineProps<{
  profile: UserProfile;
}>();
</script>

<template>
  <section
    class="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
  >
    <!-- Foto Profil dengan efek Tailwind border glow -->
    <div class="relative group-[]:">
      <div
        class="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-300"
      ></div>
      <img
        :src="profile.avatar"
        :alt="profile.name"
        class="relative w-48 object-cover rounded-full border-2 border-slate-800 shadow-xl"
      />
    </div>

    <!-- Informasi Profil -->
    <div class="flex-1 text-center md:text-left">
      <span
        class="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20"
        >{{ profile.role }}</span
      >
      <h1
        class="text-4xl md:text-5xl font-extrabold text-white mt-4 tracking-tight"
      >
        {{ profile.name }}
      </h1>
      <p
        class="text-slate-400 mt-4 text-base md:text-lg leading-relaxed max-w-2xl"
      >
        {{ profile.bio }}
      </p>

      <!-- CTA Buttons -->
      <div class="mt-8 flex justify-center md:justify-start gap-4">
        <a
          href="#projects"
          class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >Lihat Proyek</a
        >
      </div>
    </div>
  </section>
</template>
