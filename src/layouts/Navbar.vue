<script setup lang="ts">
/**
 * Konsep Dasar Vue 3: <script setup>
 * - Syntax sugar untuk Composition API yang membuat kode lebih ringkas.
 * - 'lang="ts"' mengaktifkan dukungan penuh TypeScript di dalam SFC (Single File Component).
 */
</script>

<template>
  <!-- Tailwind CSS: sticky top-0 untuk navbar melayang, backdrop-blur untuk efek kaca minimalis -->
  <header
    class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <span class="text-white font-bold tracking-wider text-lg"
        >Alhaiza<span class="text-indigo-400">.</span></span
      >
      <div class="flex items-center gap-6 text-sm text-slate-300">
        <a href="#about" class="hover:text-indigo-400 transition-colors"
          >About</a
        >
        <a href="#experience" class="hover:text-indigo-400 transition-colors"
          >Experience</a
        >
        <a href="#projects" class="hover:text-indigo-400 transition-colors"
          >Projects</a
        >
        <a href="#skills" class="hover:text-indigo-400 transition-colors"
          >Skills</a
        >
        <a href="#contact" class="hover:text-indigo-400 transition-colors"
          >Contact</a
        >
      </div>
    </nav>
  </header>
</template>
