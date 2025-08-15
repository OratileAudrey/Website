<template>
  <div class="min-h-screen overflow-x-hidden">
    <!-- Animated gradient background -->
    <div class="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 animate-gradient-shift -z-10">
    </div>

    <!-- Hero section with parallax effect -->
    <div class="relative w-full h-[50vh] overflow-hidden">
      <!-- Background image with parallax -->
      <div class="absolute inset-0 w-full h-full transform transition-transform duration-1000 ease-out"
        :style="{ transform: `translateY(${scrollY * 0.3}px)` }">
        <img src="@/assets/travel-background.jpg" alt="Travel Background"
          class="w-full h-full object-cover filter brightness-90 scale-100" />

        <!-- Animated overlay gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>

    <!-- Story section -->
    <section class="relative z-20 bg-white/80 backdrop-blur-sm">
      <div class="px-6 sm:px-12 py-12 max-w-4xl mx-auto">
        <div class="text-center mb-12 animate-fade-in-up" :class="{ 'animate-visible': isStoryVisible }">
          <h2 class="text-3xl md:text-4xl text-gray-800 mb-6">My Travel Story</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed animate-fade-in-up animation-delay-300"
          :class="{ 'animate-visible': isStoryVisible }">
          <p class="text-xl font-light mb-6">
            Travelling makes me fall in love with the world over and over again.
            There's something magical about seeing a place for the first time —
            especially when it's wrapped in nature's beauty. Being out there,
            surrounded by mountains, waterfalls, or oceans, I just feel free and alive.
          </p>
        </div>
      </div>
    </section>

    <!-- Destinations section -->
    <section class="relative z-20 px-6 sm:px-12 bg-gradient-to-b from-white/80 to-slate-50/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 animate-fade-in-up" :class="{ 'animate-visible': isDestinationsVisible }">
          <h2 class="text-4xl md:text-5xl text-gray-800 mb-4">Destination Highlights</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Each place holds a special memory
          </p>
          <div class="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div v-for="(place, index) in destinations" :key="index"
            class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2 animate-fade-in-up"
            :class="{ 'animate-visible': isDestinationsVisible }" :style="{ animationDelay: `${index * 100}ms` }">
            <!-- Image container with overlay -->
            <div class="relative h-64 overflow-hidden">
              <img :src="`/travel-pics/${place.image}`" :alt="place.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <!-- Gradient overlay that appears on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {{ place.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed text-sm">{{ place.description }}</p>

              <!-- Animated border that appears on hover -->
              <div
                class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
              </div>
            </div>

            <!-- Floating heart icon -->
            <div
              class="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
              <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-20 px-6 sm:px-12 py-24 bg-gradient-to-b from-slate-50/80 to-white/80 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto">

        <!-- Travel Quote -->
        <div class="text-center mb-16 animate-fade-in-up" :class="{ 'animate-visible': isQuoteVisible }">
          <div class="relative inline-block">
            <svg class="absolute -top-4 -left-4 w-8 h-8 text-blue-400/50" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <blockquote class="text-2xl md:text-3xl font-light text-gray-700 italic mb-4 px-8">
              “Travelling – it leaves you speechless, then turns you into a storyteller”
            </blockquote>
            <cite class="text-gray-500 text-lg">— Ibn Battuta</cite>
          </div>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mt-8"></div>
        </div>

        <!-- Call to Action -->
        <div
          class="text-center max-w-2xl mx-auto mt-16 p-8  bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 animate-fade-in-up animation-delay-300"
          :class="{ 'animate-visible': isCtaVisible }">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Need help planning your trip?</h3>
          <p class="text-gray-600 mb-6 text-lg leading-relaxed">
            Don’t worry, we’ve got you. Whether it’s your first time travelling, a solo escape, a group adventure, or
            just a local getaway... we’ll help you with all the planning.
          </p>
          <a href="/fun-travels"
            class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 font-medium rounded-full hover:from-purple-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span class="text-white">Let's Plan Your Trip</span>
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Social Media & Content Section -->
    <section class="relative z-20 px-6 sm:px-12 py-24 bg-gradient-to-b from-white/80 to-slate-100/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto">

        <!-- Section Header -->
        <div class="text-center mb-16 animate-fade-in-up" :class="{ 'animate-visible': isSocialVisible }">
          <h2 class="text-3xl md:text-4xl text-gray-800 mb-6">Follow My Journey</h2>
          <div class="w-32 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full mt-8"></div>
        </div>


        <div class="mb-20">
          <!-- YouTube Videos Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div v-for="(video, index) in youtubeVideos" :key="index"
              class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2 animate-fade-in-up"
              :class="{ 'animate-visible': isSocialVisible }" :style="{ animationDelay: `${(index + 1) * 200}ms` }">

              <!-- Video Container -->
              <div class="relative aspect-video">
                <iframe :src="`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen class="w-full h-full">
                </iframe>
              </div>
            </div>
          </div>

          <!-- YouTube Channel CTA -->
          <div class="text-center animate-fade-in-up animation-delay-600"
            :class="{ 'animate-visible': isSocialVisible }">
            <a :href="youtubeChannelUrl" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-full hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe to My Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const isStoryVisible = ref(false)
const isDestinationsVisible = ref(false)
const isQuoteVisible = ref(false)
const isCtaVisible = ref(false)

const destinations = [
  {
    title: 'Magoebaskloof',
    image: 'magoebaskloof.jpg',
    description: "The first trip I've ever been on — surrounded by mountains, waterfalls, and all the nature. This place has a special place in my heart.",
  },
  {
    title: 'Knysna',
    image: 'knysna.jpg',
    description: 'My first ever solo trip, where I got to swim in the ocean for the very first time. The Heads was the highlight.',
  },
  {
    title: 'Thailand',
    image: 'thailand.jpg',
    description: 'My first international trip — I saw so much beauty, made memories, and had an unforgettable experience.',
  },
  {
    title: 'Tsitsikamma',
    image: 'tsitsikamma.jpg',
    description: 'My favourite place on the Garden Route — the suspension bridges, the wild energy... I’m definitely going back.',
  },
  {
    title: 'Plettenberg Bay',
    image: 'plettenberg-bay.jpg',
    description: 'Where I first felt like a real traveller. Really loved the ocean views.',
  },
  {
    title: 'Port Elizabeth',
    image: 'port-elizabeth.jpg',
    description: 'I went there to just relax in a nice Airbnb.',
  },
  {
    title: 'Wilderness',
    image: 'wilderness.jpg',
    description: 'This is where I first saw the ocean with my own eyes. A place that made me slow down and breathe.',
  },
  {
    title: 'Cape Town',
    image: 'cape-town.jpg',
    description: "Always dreamt of visiting the Mother City — it sure didn't disappoint. The views, the culture, the energy… it’s iconic.",
  }
]

const handleScroll = () => {
  scrollY.value = window.scrollY

  // Trigger animations based on scroll position
  const storySection = document.querySelector('section:nth-of-type(1)')
  const destinationsSection = document.querySelector('section:nth-of-type(2)')
  const newSection = document.querySelector('section:nth-of-type(3)')

  if (storySection) {
    const rect = storySection.getBoundingClientRect()
    isStoryVisible.value = rect.top < window.innerHeight * 0.8
  }

  if (destinationsSection) {
    const rect = destinationsSection.getBoundingClientRect()
    isDestinationsVisible.value = rect.top < window.innerHeight * 0.8
  }

  // Handle the new section animations
  if (newSection) {
    const rect = newSection.getBoundingClientRect()
    const sectionVisible = rect.top < window.innerHeight * 0.8

    // Trigger quote animation first
    if (sectionVisible) {
      isQuoteVisible.value = true

      // Trigger CTA animation with a slight delay
      setTimeout(() => {
        isCtaVisible.value = true
      }, 300)
    }
  }

  const socialSection = document.querySelector('section:nth-of-type(4)') // Adjust number based on your sections
  if (socialSection) {
    const rect = socialSection.getBoundingClientRect()
    isSocialVisible.value = rect.top < window.innerHeight * 0.8
  }
}
const isSocialVisible = ref(false)
const youtubeChannelUrl = 'https://www.youtube.com/@oratileaudrey'

const youtubeVideos = [
  {
    id: 'wlKo4oDh_3c'
  },
  {
    id: 'FazRrKSH8-Q?si=QFxm5CFmoRt3q5uq'
  }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.animate-fade-in-up.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-out;
}

.animate-slide-in-right {
  animation: slide-in-right 1s ease-out;
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>
