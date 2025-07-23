<template>
  <section class="business-page py-8 px-6 min-h-screen relative overflow-hidden flex items-center justify-center">
    <div class="max-w-5xl mx-auto relative z-10 text-center">

      <!-- Hero Section -->
      <div class="text-center mb-12">
        <!-- Logo Container -->
        <div class="logo-container mb-6 relative">
          <!-- Circle background with gradient and hover effect -->
          <div
            class="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-green-400 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
            <!-- Your actual logo image -->
            <img src="@/assets/logo-funtravels.png" alt="Fun Travels Logo" class="w-64 h-64 object-contain" />
          </div>
          <!-- Floating elements around logo -->
          <div class="floating-element absolute top-4 -left-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            class="floating-element absolute top-12 -right-6 w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100">
          </div>
          <div
            class="floating-element absolute -bottom-2 left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-200">
          </div>
        </div>

        <!-- Brand Name & Slogan -->
        <div class="brand-header mb-12">
          <h1
            class="text-5xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
            Fun Travels
          </h1>
          <p class="text-xl italic text-gray-600 font-light tracking-wide">
            Your Trip, Your Own Way!
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <!-- Story Section -->
      <div class="story-section max-w-4xl mx-auto">
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div class="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p class="text-xl mb-8 text-gray-800 font-medium">
              Fun Travels was born from a love of freedom, adventure, and simple, stress-free travel.
            </p>

            <p class="mb-6">
              Started by a solo traveler who understands both the thrill of new places and the stress of figuring it all
              out,
              Fun Travels helps you go from <span class="font-bold text-blue-600">"Where do I start?"</span> to
              <span class="font-bold text-green-600">"That was the best trip ever!"</span>—without breaking the bank.
            </p>

            <p class="mb-6">
              Whether you're chasing waterfalls, craving beach sunsets, or just need a perfect weekend escape,
              we help you book, plan, and enjoy your journey, your way.
            </p>

            <p class="text-lg font-medium text-gray-800">
              We're here for the planners, the dreamers, the unsure-but-curious—because everyone deserves a little more
              fun.
            </p>
          </div>
        </div>
      </div>

      <!-- Social Links -->
      <div class="social-section mt-16 text-center">
        <h3 class="text-2xl font-semibold mb-8 text-gray-800">Connect with us</h3>
        <div class="flex justify-center gap-8 flex-wrap">
          <a href="https://www.instagram.com/fun_travelss/" target="_blank" class="social-link instagram group">
            <div
              class="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span
              class="block mt-2 font-medium text-gray-700 group-hover:text-purple-600 transition-colors">Instagram</span>
          </a>

          <a href="https://www.facebook.com/OratileAudrey7" target="_blank" class="social-link facebook group">
            <div
              class="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <span
              class="block mt-2 font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
          </a>

          <a href="https://www.tiktok.com/@fun_travelss?_t=ZM-8yDI5xVf75i&_r=1" target="_blank"
            class="social-link tiktok group">
            <div
              class="w-14 h-14 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </div>
            <span class="block mt-2 font-medium text-gray-700 group-hover:text-gray-800 transition-colors">TikTok</span>
          </a>

          <a href="https://wa.me/+27790618994" target="_blank" class="social-link whatsapp group">
            <div
              class="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488" />
              </svg>
            </div>
            <span
              class="block mt-2 font-medium text-gray-700 group-hover:text-green-600 transition-colors">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
      <div class="absolute top-40 right-20 w-40 h-40 bg-teal-200/30 rounded-full blur-2xl"></div>
      <div class="absolute bottom-32 left-1/4 w-48 h-48 bg-green-200/30 rounded-full blur-2xl"></div>
      <div class="absolute bottom-20 right-1/3 w-36 h-36 bg-blue-200/20 rounded-full blur-2xl"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
// no logic needed for this static section
</script>

<style scoped>
.business-page {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  font-family: 'Inter', sans-serif;
}

.logo-placeholder {
  position: relative;
}

.floating-element {
  opacity: 0.7;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-2px);
}

/* Animations */
@keyframes bounce {

  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }

  70% {
    transform: translate3d(0, -4px, 0);
  }

  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .business-page {
    padding: 3rem 1rem;
  }

  .logo-placeholder {
    width: 8rem;
    height: 8rem;
  }

  .brand-header h1 {
    font-size: 2.5rem;
  }

  .story-section .bg-white\/80 {
    padding: 1.5rem;
  }
}
</style>
