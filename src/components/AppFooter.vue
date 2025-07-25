<template>
  <footer class="footer-bg text-white py-6 shadow-inner">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <p class="text-sm text-white/80">&copy; {{ currentYear }} Oratile Audrey. All rights reserved.</p>

      <div class="flex space-x-4">
        <!-- Email -->
        <a href="mailto:oratileaudrey2000@gmail.com"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
          aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/oratile_audrey/" target="_blank" rel="noopener noreferrer"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
          aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        <!-- Facebook -->
        <a href="https://www.facebook.com/audrey.manaleng.7" target="_blank" rel="noopener noreferrer"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
          aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        <!-- YouTube -->
        <a href="https://www.youtube.com/@oratileaudrey" target="_blank" rel="noopener noreferrer"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
          aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path
              d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed<number>(() => new Date().getFullYear())
</script>

<style scoped>
.footer-bg {
  background: #8e2483;
}
</style>
