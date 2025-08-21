<template>
  <section class="business-page py-4 px-6 min-h-screen relative overflow-hidden flex items-center justify-center">
    <div class="max-w-7xl mx-auto relative z-10 text-center">

      <!-- Hero Section -->
      <div class="hero-section flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
        <!-- Brand Name & Slogan - Left Side -->
        <div class="brand-header text-center lg:text-left flex-1">
          <h1
            class="text-4xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
            Fun Travels
          </h1>
          <p class="text-l italic text-gray-600 font-light tracking-wide">
            Your Trip, Your Own Way!
          </p>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 lg:mx-0 mx-auto mt-4 rounded-full"></div>
        </div>

        <!-- Logo Container - Right Side -->
        <div class="logo-container relative flex-shrink-0">
          <!-- Smaller circle background with gradient and hover effect -->
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-400 via-teal-400 to-green-400 flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-500 overflow-hidden">

            <img src="@/assets/logo-funtravels.png" alt="Fun Travels Logo"
              class="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain" />
          </div>

          <!-- Floating elements (optional: shrink or hide on small screens if still too much) -->
          <div class="floating-element absolute top-2 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            class="floating-element absolute top-8 -right-4 w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100">
          </div>
          <div
            class="floating-element absolute -bottom-2 left-6 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-200">
          </div>
        </div>


      </div>

      <!-- Main Content Section -->
      <div class="main-content flex flex-col lg:flex-row gap-12 mb-16">
        <!-- Left Side - Story and Image -->
        <div class="story-section grid place-items-center lg:w-[60%]">
          <div class="prose prose-lg text-gray-700 leading-relaxed mb-8">
            <p class="text-xl mb-6 text-gray-800 font-medium">
              Fun Travels was created out of a love for freedom, adventure, and making travel feel easy and exciting —
              not stressful.
            </p>

            <p class="mb-4 text-lg">
              It all started with a solo traveler who knows the joy of exploring new places... and the overwhelm of
              trying to plan everything. That’s why we’re here: to help you go from
              <span class="font-bold text-blue-600">“Where do I even begin?”</span> to
              <span class="font-bold text-green-600">“That was one of the best trips of my life.”</span>
            </p>

            <p class="mb-4 text-lg">
              Whether you’re dreaming of waterfalls, chasing sunsets, or just need a relaxing weekend escape, we’ll help
              you plan it all.
            </p>
          </div>


          <!-- Story Image -->
          <div class="story-image rounded-2xl w-1/2 overflow-hidden shadow-xl">
            <img src="@/assets/fun-travels.jpg" alt="Fun Travels Logo" class="w-full h-full object-cover" />
          </div>


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
                <span
                  class="block mt-2 font-medium text-gray-700 group-hover:text-gray-800 transition-colors">TikTok</span>
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

        <!-- Right Side - Booking Form -->
        <div class="booking-section lg:w-[40%]">
          <div class="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-100">
            <div class="text-center mb-6">
              <h2 class="text-4xl mb-3 bg-clip-text text-gray-800">
                Inquiry Form
              </h2>
              <div class="w-16 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-3 rounded-full"></div>
            </div>

            <form @submit.prevent="submitForm" class="booking-form">
              <div class="form-grid-mobile text-left">
                <div class="input-group">
                  <label for="name">Your Name</label>
                  <input id="name" name="name" v-model="form.name" type="text" required
                    placeholder="Enter your full name" />
                </div>

                <div class="input-group">
                  <label for="destination">Destination</label>
                  <input id="destination" name="destination" v-model="form.destination" type="text" required
                    placeholder="Where do you want to go?" />
                </div>

                <div class="input-group">
                  <label for="people">Number of Travelers</label>
                  <input id="people" name="people" v-model="form.people" type="number" min="1" required />
                </div>

                <div class="input-group">
                  <label for="dates">Travel dates?</label>
                  <input id="dates" name="dates" v-model="form.dates" type="text"
                    placeholder="e.g. July 15–20 or just July" required />
                </div>

                <div class="input-group">
                  <label for="duration">How long (Days)?</label>
                  <input id="duration" name="duration" v-model="form.duration" type="number" min="1" required />
                </div>


                <div class="input-group">
                  <label for="budget">Budget Range</label>
                  <input id="budget" name="budget" v-model="form.budget" type="text" required
                    placeholder="e.g. R3,000 – R12,000" />
                </div>

                <div class="input-group">
                  <label>What can we help you with?</label>
                  <div class="multi-select" ref="dropdownRef">
                    <div class="selected-options" @click="toggleDropdown">
                      {{ form.help.length > 0 ? form.help.join(', ') : 'Select your needs' }}
                    </div>
                    <div class="dropdown-icon" @click="toggleDropdown">▾</div>

                    <div v-if="dropdownOpen" class="dropdown-options">
                      <label v-for="option in helpOptions" :key="option">
                        <input type="checkbox" :value="option" v-model="form.help" @click.stop />
                        {{ option }}
                      </label>
                    </div>
                  </div>
                </div>

                <div class="input-group">
                  <label for="extra">Tell me more about your dream trip</label>
                  <textarea id="extra" v-model="form.extra" rows="3"
                    placeholder="Any special requirements, preferences, or things you'd love to do?" />
                </div>
              </div>

              <button type="submit" class="submit-btn">
                <span class="btn-icon">💬</span>
                Let's Chat on WhatsApp
              </button>
            </form>
          </div>
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
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'

const form = reactive({
  name: '',
  destination: '',
  people: 1,
  dates: '',
  duration: 1,
  budget: '',
  help: [] as string[],
  extra: ''
})

const helpOptions = [
  '🏨 Accommodation',
  '🚗 Transport',
  '🎯 Activities & Experiences',
  '✈️ Planning the whole trip',
  '🤔 Not sure, let\'s discuss'
]

const dropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const handleClickOutside = (e: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    dropdownOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))

const submitForm = () => {
  const message = `Hi Fun Travels team! 🌍

My name is ${form.name} !

My Trip Details:
• Destination: ${form.destination}
• Travelers: ${form.people}
• Dates: ${form.dates}
• Duration: ${form.duration} day(s)
• Budget: ${form.budget}

I need help with: ${form.help.join(', ')}

Additional info: ${form.extra || 'Nothing specific!'}

Thank you! `

  const encodedMessage = encodeURIComponent(message)
  const phone = '27790618994'
  const url = `https://wa.me/${phone}?text=${encodedMessage}`
  window.open(url, '_blank')
}
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

/* Form Styles - Mobile Size */
.booking-form {
  background: transparent;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
}

.form-grid-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.input-group label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
}

.input-group input,
.input-group select,
.input-group textarea {
  padding: 0.8rem;
  font-size: 0.95rem;
  border: 2px solid #e1e8ed;
  border-radius: 10px;
  background: #f8fafc;
  transition: all 0.3s ease;
  font-family: inherit;
  color: black;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.input-group input::placeholder,
.input-group textarea::placeholder {
  color: #94a3b8;
  font-style: italic;
}

.input-group textarea {
  resize: vertical;
  min-height: 80px;
  line-height: 1.4;
}

.multi-select {
  position: relative;
  border: 2px solid #e1e8ed;
  border-radius: 10px;
  padding: 0.8rem;
  background: #f8fafc;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
}

.multi-select:hover {
  border-color: #667eea;
}

.selected-options {
  font-size: 0.95rem;
  color: #334155;
  padding-right: 1.5rem;
}

.dropdown-icon {
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: #6b7280;
  transition: transform 0.3s ease;
}

.dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #e1e8ed;
  border-radius: 10px;
  margin-top: 0.4rem;
  padding: 0.8rem;
  z-index: 10;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  max-height: 180px;
  overflow-y: auto;
}

.dropdown-options label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: #334155;
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.dropdown-options label:hover {
  background-color: #f1f5f9;
}

.dropdown-options input[type="checkbox"] {
  width: 14px;
  height: 14px;
  margin: 0;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  box-shadow: 0 3px 12px rgba(37, 211, 102, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
}

.submit-btn:active {
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 1.1rem;
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

  .logo-container .w-40 {
    width: 8rem;
    height: 8rem;
  }

  .brand-header h1 {
    font-size: 2.5rem;
  }

  .story-section .bg-white\/80,
  .booking-section .bg-white\/90 {
    padding: 1.5rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .booking-section h2 {
    font-size: 2rem;
  }
}
</style>
