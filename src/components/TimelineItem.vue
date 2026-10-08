<script setup lang="ts">
/**
 * ============================================================================
 * [KONSEP VUE 3: ATOM UI COMPONENT & PROPS TYPE DEFINITION]
 * Komponen ini merupakan atom UI terkecil yang bertanggung jawab merender satu
 * titik riwayat kerja (Single Responsibility Principle).
 *
 * Mengapa defineProps<Experience>()?
 * - Memberikan kontrak tipe compile-time yang ketat via TypeScript.
 * - Mencegah runtime rendering error saat mengakses properti objek (misal: null pointer).
 * ============================================================================
 */
import type { Experience } from "../types/profile";

defineProps<{
  experience: Experience;
  isLast?: boolean;
}>();
</script>

<template>
  <!--
    ============================================================================
    [ALUR DATA & RENDERING: PROPS BINDING]
    - Data item diterima dari parent melalui prop 'experience'.
    - Garis timeline vertikal dikontrol secara kondisional menggunakan class Tailwind
      dan prop boolean 'isLast' agar garis tidak menembus batas bawah timeline.
    ============================================================================
  -->
  <div class="relative pl-8 pb-10 group">
    <!-- Garis vertikal timeline penanda alur waktu (Hanya tampil jika bukan item terakhir) -->
    <div
      v-if="!isLast"
      class="absolute left-3 top-3 bottom-0 w-0.5 bg-slate-800 group-hover:bg-indigo-500/40 transition-colors duration-300"
      aria-hidden="true"
    ></div>

    <!-- Titik indikator lingkaran (Bullet Point) dengan micro-interaction Tailwind -->
    <div
      class="absolute left-1.5 top-2 w-3.5 h-3.5 rounded-full border-2 border-slate-900 bg-slate-700 group-hover:bg-indigo-400 group-hover:scale-125 transition-all duration-300 shadow-sm"
      aria-hidden="true"
    ></div>

    <!-- Kartu detail pengalaman karir -->
    <div
      class="bg-slate-900/60 border border-slate-850 p-5 rounded-2xl hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-md"
    >
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <h3 class="text-lg font-semibold text-white tracking-wide group-hover:text-indigo-300 transition-colors">
          {{ experience.role }}
        </h3>
        <span class="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/40 w-fit">
          {{ experience.period }}
        </span>
      </div>

      <p class="text-sm font-medium text-slate-300 mb-3">
        {{ experience.company }}
      </p>

      <p class="text-sm text-slate-400 leading-relaxed mb-4">
        {{ experience.description }}
      </p>

      <!-- Badge list teknologi yang digunakan (Looping v-for lokal) -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in experience.technologies"
          :key="tech"
          class="px-2 py-0.5 text-xs rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
