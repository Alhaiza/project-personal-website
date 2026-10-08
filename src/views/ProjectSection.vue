<script setup lang="ts">
import { defineProps } from "vue";
import type { Project } from "../types/profile";

defineProps<{
  projects: Project[];
  skills: string[];
}>();
</script>

<template>
  <section id="projects" class="py-16 px-6 max-w-6xl mx-auto">
    <h2
      class="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4"
    >
      Featured Projects
    </h2>

    <!-- Grid Layout Tailwind -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!--
        Konsep Dasar Vue 3: v-for directive
        - Digunakan untuk melakukan perulangan array data.
        - ':key' wajib diisi dengan nilai unik (id) untuk efisiensi rendering Virtual DOM.
      -->
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition flex flex-col justify-between"
      >
        <div>
          <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
          <p class="text-slate-400 mt-2 text-sm leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Tags List -->
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700"
            >{{ tag }}</span
          >
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div id="skills" class="mt-20">
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-4"
      >
        Tech Stack & Skills
      </h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="skill in skills"
          :key="skill"
          class="px-4 py-2 bg-slate-900 border-slate-800 text-indigo-300 font-medium rounded-xl text-sm shadow-sm"
          >{{ skill }}</span
        >
      </div>
    </div>
  </section>
</template>
