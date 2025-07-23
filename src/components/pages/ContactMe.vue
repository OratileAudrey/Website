<template>
  <div class="relative min-h-screen bg-slate-900 overflow-hidden">
    <!-- Subtle background decorative elements -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div
        class="absolute top-24 left-12 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl animate-pulse">
      </div>
      <div
        class="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000">
      </div>
      <div
        class="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-xl animate-pulse delay-500">
      </div>
    </div>

    <div class="container mx-auto px-4 py-16 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-5xl font-bold text-slate-100 mb-4 animate-fade-in">
          Get in Touch
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Let's connect and create something extraordinary together
        </p>
      </div>

      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Form -->
        <div class="order-2 lg:order-1">
          <div
            class="relative bg-slate-800/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-700/50 group hover:border-slate-600/50 transition-all duration-500">
            <!-- Subtle gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>

            <div class="relative z-10">
              <div class="flex items-center mb-8">
                <div class="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <h2 class="text-2xl font-bold text-slate-100">Send me a message</h2>
              </div>

              <form @submit.prevent="onSubmit" class="space-y-6">
                <!-- Name and Email Row -->
                <div class="grid gap-6 md:grid-cols-2">
                  <!-- Name Field -->
                  <div class="relative group">
                    <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <div class="relative">
                      <input type="text" id="name" v-model="form.name" required
                        class="w-full px-4 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-slate-100 placeholder-slate-500"
                        placeholder="Enter your full name" />
                    </div>
                  </div>

                  <!-- Email Field -->
                  <div class="relative group">
                    <label for="email" class="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <div class="relative">
                      <input type="email" id="email" v-model="form.email" required
                        class="w-full px-4 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 text-slate-100 placeholder-slate-500"
                        placeholder="Enter your email address" />
                    </div>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="relative group">
                  <label for="message" class="block text-sm font-medium text-slate-300 mb-2">
                    Your Message *
                  </label>
                  <div class="relative">
                    <textarea id="message" v-model="form.message" required rows="6"
                      class="w-full px-4 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none text-slate-100 placeholder-slate-500"
                      placeholder="Write your message here..."></textarea>
                  </div>
                </div>

                <!-- Submit Button -->
                <button type="submit" :disabled="!isFormValid"
                  class="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none">
                  <span class="relative z-10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      viewBox="0 0 24 24">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Contact Info & Social -->
        <div class="order-1 lg:order-2 space-y-8">
          <!-- Contact Methods -->
          <div
            class="relative bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-700/50 hover:border-slate-600/50 group">
            <!-- Subtle gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>

            <div class="relative z-10">
              <div class="flex items-center mb-6">
                <div class="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <h3 class="text-xl font-bold text-slate-100">Let's Connect</h3>
              </div>

              <div class="space-y-4">
                <!-- Email -->
                <a href="mailto:oratileaudrey2000@gmail.com"
                  class="flex items-center p-2 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 hover:border-purple-500/30 border border-transparent transition-all duration-300 group">
                  <div
                    class="w-12 h-12 bg-gradient-to-r  bg-slate-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-100">Email</p>
                    <p class="text-slate-400 text-sm">oratileaudrey2000@gmail.com</p>
                  </div>
                </a>

                <!-- Location -->
                <div class="flex items-center p-2 bg-slate-700/50 rounded-xl border border-transparent">
                  <div class="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-300" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      viewBox="0 0 24 24">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-100">Location</p>
                    <p class="text-slate-400 text-sm">Pretoria, South Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div
            class="relative bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 group transition-all duration-500">
            <!-- Subtle gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>

            <div class="relative z-10">
              <div class="flex items-center justify-center mb-6">
                <div class="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <h3 class="text-xl font-bold text-slate-100">Follow My Journey</h3>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <!-- Instagram -->
                <a href="https://www.instagram.com/oratile_audrey/" target="_blank"
                  class="group flex flex-col items-center p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span
                    class="text-slate-300 font-medium group-hover:text-slate-100 transition-colors duration-300 text-sm">Instagram</span>
                </a>

                <!-- TikTok -->
                <a href="https://www.tiktok.com/@fun_travelss?_t=ZM-8yDI5xVf75i&_r=1" target="_blank"
                  class="group flex flex-col items-center p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105">
                  <div
                    class="w-12 h-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-slate-500">
                    <svg class="w-6 h-6 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <span
                    class="text-slate-300 font-medium group-hover:text-slate-100 transition-colors duration-300 text-sm">TikTok</span>
                </a>

                <!-- YouTube -->
                <a href="https://www.youtube.com/@oratileaudrey" target="_blank"
                  class="group flex flex-col items-center p-3 bg-slate-700/50 rounded-xl hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105">
                  <div
                    class="w-14 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <span
                    class="text-slate-300 font-medium group-hover:text-slate-100 transition-colors duration-300 text-sm">YouTube</span>
                </a>
              </div>

              <div class="mt-6">
                <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

interface ContactForm {
  name: string
  email: string
  message: string
}

const form = ref<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const isFormValid = computed(() => {
  return form.value.name.trim() !== '' &&
    form.value.email.trim() !== '' &&
    form.value.message.trim() !== '' &&
    form.value.email.includes('@')
})

const onSubmit = async () => {
  if (!isFormValid.value) return

  const templateParams = {
    from_name: form.value.name,
    reply_to: form.value.email,
    message: form.value.message,
    user_date: new Date().toLocaleString(),
    user_email: form.value.email
  }

  try {
    await emailjs.send('service_use3mkr', 'template_ny2zuh8', templateParams, 'BJ9FXAXpoT2WvypAd')
    alert('Message sent successfully!')

    // Reset form
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    console.error('FAILED...', error)
    alert('Failed to send message. Please try again.')
  }
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-500 {
  animation-delay: 0.5s;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
