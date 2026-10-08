<script setup lang="ts">
/**
 * ============================================================================
 * [KONSEP VUE 3: ORGANISM SECTION & ITERASI LIST (v-for)]
 * Komponen ExperienceSection bertindak sebagai kontainer presentasional
 * yang menerima array daftar riwayat karir melalui TypeScript typed props.
 *
 * Mengapa komponen dipecah terpisah dari App.vue?
 * - Single Responsibility: App.vue hanya mengorkestrasi, section fokus pada layout.
 * - Efisiensi Re-render: Virtual DOM Vue hanya memperbarui bagian yang datanya berubah.
 * ============================================================================
 */
import type { Experience } from "../types/profile";
import TimelineItem from "../components/TimelineItem.vue";

defineProps<{
  experiences: Experience[];
}>();
</script>

<template>
  <section id="experience" class="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
    <!-- Section Header dengan gaya estetika aksen border minimalis modern -->
    <div class="mb-10">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 border-l-4 border-indigo-500 pl-4">
        Professional Journey
      </h2>
      <p class="text-slate-400 text-sm pl-4">
        Track record of technical experience in software engineering and modern web architecture.
      </p>
    </div>

    <!--
      ============================================================================
      [HANDLING ISOLASI DAMPAK: POSITIVE & EDGE CASE]
      - Positive Case: Menampilkan daftar riwayat jika 'experiences.length > 0'.
      - Edge Case: Menampilkan placeholder fallback informatif jika data kosong.
      ============================================================================
    -->
    <div v-if="experiences && experiences.length > 0" class="max-w-3xl ml-2">
      <!--
        Alur Data:
        Array 'experiences' di-loop menggunakan 'v-for'. Tiap objek di-pass
        ke atom child <TimelineItem> melalui prop ':experience="item"'.
      -->
      <TimelineItem
        v-for="(item, index) in experiences"
        :key="item.id"
        :experience="item"
        :is-last="index === experiences.length - 1"
      />
    </div>

    <div
      v-else
      class="text-center py-12 border border-dashed border-slate-800 rounded-2xl p-6 bg-slate-900/30"
    >
      <p class="text-slate-500 text-sm">No experience records available yet.</p>
    </div>
  </section>
</template>
