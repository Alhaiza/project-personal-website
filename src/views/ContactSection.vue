<script setup lang="ts">
/**
 * ============================================================================
 * [KONSEP VUE 3: TWO-WAY DATA BINDING (v-model) & CLIENT-SIDE VALIDATION]
 * Modul ini mendemonstrasikan penanganan form reaktif:
 * 1. 'ref' & 'reactive' dari Vue Core untuk state management lokal.
 * 2. Strict typing untuk validasi error menggunakan record TypeScript.
 * 3. Vue 3 <Transition> bawaan untuk animasi transisi status feedback.
 * ============================================================================
 */
import { reactive, ref } from "vue";
import type { ContactMessage } from "../types/profile";

// Inisialisasi state reaktif formulir kontak
const form = reactive<ContactMessage>({
  name: "",
  email: "",
  message: "",
});

// State untuk menyimpan pesan kesalahan validasi per field input
const errors = reactive<Record<keyof ContactMessage, string>>({
  name: "",
  email: "",
  message: "",
});

// State status pengiriman & feedback UI
const isSubmitting = ref<boolean>(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const feedbackMessage = ref<string>("");

/**
 * ============================================================================
 * [ALUR VALIDASI DATA DENGAN TYPESCRIPT & REGEX]
 * Mengisolasi Negative Case (input salah format atau kosong) sebelum data diproses.
 * ============================================================================
 */
const validateForm = (): boolean => {
  let isValid = true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate Name
  if (!form.name.trim()) {
    errors.name = "Full name is required.";
    isValid = false;
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
    isValid = false;
  } else {
    errors.name = "";
  }

  // Validate Email
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
    isValid = false;
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = "Invalid email format (e.g., user@domain.com).";
    isValid = false;
  } else {
    errors.email = "";
  }

  // Validate Message
  if (!form.message.trim()) {
    errors.message = "Message is required.";
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
    isValid = false;
  } else {
    errors.message = "";
  }

  return isValid;
};

/**
 * ============================================================================
 * [SIMULASI PENGIRIMAN & PENANGANAN EVENT HANDLER]
 * ============================================================================
 */
const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = "idle";

  try {
    // Simulate async network request (1s)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form values on success (Positive Case)
    form.name = "";
    form.email = "";
    form.message = "";

    submitStatus.value = "success";
    feedbackMessage.value = "Your message has been sent successfully! I will get back to you shortly.";
  } catch {
    // Negative/Anomaly Case
    submitStatus.value = "error";
    feedbackMessage.value = "An issue occurred while sending your message. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="py-16 px-6 max-w-6xl mx-auto scroll-mt-20">
    <div class="mb-10">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 border-l-4 border-indigo-500 pl-4">
        Get in Touch
      </h2>
      <p class="text-slate-400 text-sm pl-4">
        Let's discuss system architecture, potential collaborations, or exchange technical insights.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <!-- Info Box (Left) -->
      <div class="md:col-span-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <h3 class="text-xl font-bold text-white mb-4">Contact Information</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">
          Open for technical discussions on large-scale frontend and backend applications, Vite/Vue performance tuning, and structured TypeScript development.
        </p>

        <div class="space-y-4 text-sm text-slate-300">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono">@</span>
            <span>alqadrihaiza@gmail.com</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono">IN</span>
            <a href="https://www.linkedin.com/in/alhaiza" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-400 transition-colors">linkedin.com/in/alhaiza</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono">GH</span>
            <a href="https://github.com/Alhaiza" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-400 transition-colors">github.com/Alhaiza</a>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400 text-xs font-mono">LOC</span>
            <span>Pontianak, Indonesia (WIB / UTC+7)</span>
          </div>
        </div>
      </div>

      <!-- Interactive Form (Right) -->
      <div class="md:col-span-7 bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8">
        <form @submit.prevent="handleSubmit" novalidate class="space-y-5">
          <!-- Input Field: Name -->
          <div>
            <label for="contact-name" class="block text-xs font-medium text-slate-300 mb-2">
              Full Name
            </label>
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              placeholder="e.g., Syarif Muhammad"
              :class="[
                'w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200',
                errors.name
                  ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
              ]"
            />
            <p v-if="errors.name" class="mt-1 text-xs text-rose-400 font-medium">
              {{ errors.name }}
            </p>
          </div>

          <!-- Input Field: Email -->
          <div>
            <label for="contact-email" class="block text-xs font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              id="contact-email"
              v-model="form.email"
              type="email"
              placeholder="name@company.com"
              :class="[
                'w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200',
                errors.email
                  ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
              ]"
            />
            <p v-if="errors.email" class="mt-1 text-xs text-rose-400 font-medium">
              {{ errors.email }}
            </p>
          </div>

          <!-- Input Field: Message -->
          <div>
            <label for="contact-message" class="block text-xs font-medium text-slate-300 mb-2">
              Message or Inquiry
            </label>
            <textarea
              id="contact-message"
              v-model="form.message"
              rows="4"
              placeholder="Write your message here..."
              :class="[
                'w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200 resize-none',
                errors.message
                  ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/20'
                  : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
              ]"
            ></textarea>
            <p v-if="errors.message" class="mt-1 text-xs text-rose-400 font-medium">
              {{ errors.message }}
            </p>
          </div>

          <!-- Feedback Notification Banner -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-2 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-2 opacity-0"
          >
            <div
              v-if="submitStatus === 'success'"
              class="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs flex items-center gap-2"
            >
              <svg class="w-4 h-4 shrink-0 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ feedbackMessage }}</span>
            </div>
          </Transition>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900/50 disabled:cursor-not-allowed text-white font-medium text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 active:scale-[0.99]"
          >
            <svg
              v-if="isSubmitting"
              class="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
            <span>{{ isSubmitting ? "Sending Message..." : "Send Message" }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
