<template>
  <section class="about-me py-16 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="(particle, index) in particles" :key="index"
        class="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30" :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's'
        }" :class="particle.animation" />
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content Section (Left) -->
        <div class="content-section space-y-6 text-gray-800" :class="{ 'animate-fade-in-up': isVisible }"
          ref="contentRef">
          <!-- Section Title with Typing Effect -->
          <h1
            class="text-4xl md:text-5xl mb-8 font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            {{ displayedTitle }}
            <span class="inline-block w-1 h-12 bg-purple-600 ml-1 animate-pulse" v-if="isTyping" />
          </h1>

          <div class="prose prose-lg">
            <p class="text-xl leading-relaxed mb-8 transition-all duration-700"
              :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }">
              A South African explorer, creator, and storyteller who loves chasing sunsets, solo adventures, and
              meaningful connections.
            </p>

            <p class="text-lg leading-relaxed mb-8 transition-all duration-700 delay-200"
              :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }">
              Whether it's bungee jumping off bridges, hiking trails, or capturing moments through my lens, I find
              joy in living fully and sharing it with others.
            </p>

            <p class="text-lg leading-relaxed transition-all duration-700 delay-300"
              :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-8 opacity-0': !isVisible }">
              This space is where I blend my love for content creation, tech and travel. I believe life shouldn't be
              lived in one place... so I don't.
            </p>
          </div>

          <!-- Interactive Social Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div v-for="(stat, index) in stats" :key="index"
              class="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-300 cursor-pointer group"
              @mouseenter="animateStat(index)">
              <div
                class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110"
                :class="{ 'animate-bounce': stat.isAnimating }">
                <span v-if="stat.value" class="font-bold">{{ stat.value }}</span>
                <span v-else class="text-4xl font-bold">∞</span>
                {{ stat.suffix }}
              </div>
              <div class="text-sm text-gray-600 font-medium">{{ stat.label }}</div>
            </div>
          </div>

          <!-- Decorative elements with hover effects -->
          <!-- <div class="flex space-x-4 pt-8">
            <div v-for="(dot, index) in 3" :key="index"
              class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-125" :class="[
                index === 0 ? 'bg-purple-400 hover:bg-purple-500' :
                  index === 1 ? 'bg-pink-400 hover:bg-pink-500' :
                    'bg-orange-400 hover:bg-orange-500',
                'animate-pulse'
              ]" :style="{ animationDelay: (index * 100) + 'ms' }" @click="triggerRipple($event)" />
          </div> -->
        </div>

        <!-- Image Section (Right)-->
        <div class="image-container max-w-sm mx-auto lg:mx-0" :class="{ 'animate-fade-in-right': isVisible }">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
            @mouseenter="imageHovered = true" @mouseleave="imageHovered = false">
            <!-- Image -->
            <div
              class="aspect-[3/4] bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 transition-transform duration-700 group-hover:scale-110"
              :class="{ 'transform rotate-1': imageHovered }">
              <img src="@/assets/me.jpg" alt="Audrey - Explorer and Content Creator"
                class="w-full h-full object-cover transition-all duration-700 group-hover:brightness-110" />
            </div>

            <!-- Dynamic Overlay -->
            <div class="absolute inset-0 transition-all duration-500"
              :class="imageHovered ? 'bg-gradient-to-t from-purple-600/30 to-pink-400/20' : 'bg-gradient-to-t from-black/20 to-transparent'" />

            <!-- Floating Action Button -->
            <div
              class="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer"
              :class="{ 'scale-110 rotate-12': imageHovered, 'scale-0': !imageHovered }">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z">
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- My Interests Section -->
    <div class="max-w-7xl py-20 mx-auto relative z-10">
      <div class="text-center mb-16 mt-16" ref="interestsRef" :class="{ 'animate-fade-in-up': interestsVisible }">
        <h2 class="text-3xl md:text-5xl text-gray-800 mb-4">Interests</h2>

        <p class="text-xl text-gray-600 max-w-3xl mt- mx-auto">
          Some of the things I enjoy doing
        </p>
        <div
          class="w-24 h-1 mt-4 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full transition-all duration-500 hover:w-32">
        </div>
      </div>

      <!-- Interests Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div v-for="(interest, index) in interests" :key="index"
          class="interest-card bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer border border-white/20 group"
          :class="{ 'animate-fade-in-up': interestsVisible }" :style="{ animationDelay: (index * 150) + 'ms' }">
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
            :class="interest.gradientClass">
            <component :is="interest.icon"
              class="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
            {{ interest.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
            {{ interest.description }}
          </p>

          <!-- Progress indicator for interests -->
          <div class="w-full bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
            <div class="h-full rounded-full transition-all duration-1000 ease-out" :class="interest.progressColor"
              :style="{ width: interestsVisible ? interest.progress + '%' : '0%' }" />
          </div>
        </div>
      </div>

      <!-- Bottom CTA with Ripple Effect -->
      <div class="text-center">
        <div class="inline-flex space-x-4 relative">
          <div v-for="(dot, index) in 3" :key="index"
            class="w-4 h-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-150 relative overflow-hidden"
            :class="[
              index === 0 ? 'bg-purple-400 hover:bg-purple-500' :
                index === 1 ? 'bg-pink-400 hover:bg-pink-500' :
                  'bg-orange-400 hover:bg-orange-500',
              'animate-bounce'
            ]" :style="{ animationDelay: (index * 100) + 'ms' }" @click="triggerRipple($event)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, h } from 'vue'

// Typing effect
const title = "Hi, I'm Audrey"
const displayedTitle = ref('')
const isTyping = ref(true)

// Visibility tracking
const isVisible = ref(false)
const interestsVisible = ref(false)
const contentRef = ref<HTMLElement>()
const interestsRef = ref<HTMLElement>()

// Image hover state
const imageHovered = ref(false)

// Animated particles
const particles = ref(
  Array.from({ length: 20 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    animation: ['animate-pulse', 'animate-bounce'][Math.floor(Math.random() * 2)]
  }))
)

// Stats with animations
const stats = ref([
  { label: 'Adventures', value: 20, suffix: '+', isAnimating: false },
  { label: 'Provinces', value: 9, suffix: '+', isAnimating: false },
  { label: 'Memories', suffix: '', isAnimating: false }
])

// SVG Icons as functional components
const RunningIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-8 h-8'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M13 10V3L4 14h7v7l9-11h-7z'
  })
])

const CodeIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-8 h-8'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  })
])

const VideoIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-8 h-8'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  })
])

const BookIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-8 h-8'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253'
  })
])

// Enhanced interests data
const interests = ref([
  {
    icon: RunningIcon,
    title: 'Running & Trekking',
    description: 'Running helps me clear my head. Trekking reconnects me with nature. One step at a time, I\'m working towards my first half-marathon.',
    gradientClass: 'bg-gradient-to-br from-purple-500 to-pink-500',
    progress: 85,
    progressColor: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    icon: CodeIcon,
    title: 'Coding',
    description: 'I like building things, and coding lets me do that. It\'s problem-solving, creative thinking, and pure magic when it works. (And yes I made this website myself lol)',
    gradientClass: 'bg-gradient-to-br from-pink-500 to-orange-500',
    progress: 75,
    progressColor: 'bg-gradient-to-r from-pink-500 to-orange-500'
  },
  {
    icon: VideoIcon,
    title: 'Content Creation',
    description: 'I love filming, editing, and sharing life\'s adventures especially when I travel. My YouTube channel is where I bring those stories to life. It\'s all about inspiring others to explore more and live fully.',
    gradientClass: 'bg-gradient-to-br from-red-500 to-purple-500',
    progress: 90,
    progressColor: 'bg-gradient-to-r from-red-500 to-purple-500'
  },
  {
    icon: BookIcon,
    title: 'Reading',
    description: 'I turn to books for inspiration and growth. I enjoy real stories and ideas that challenge how I think. Some of my favourite authors include Dale Carnegie and Napoleon Hill.',
    gradientClass: 'bg-gradient-to-br from-pink-500 to-orange-400',
    progress: 70,
    progressColor: 'bg-gradient-to-r from-pink-500 to-orange-400'
  }
])

// Intersection Observer for animations
let observer: IntersectionObserver | null = null

const animateStat = (index: number) => {
  stats.value[index].isAnimating = true
  setTimeout(() => {
    stats.value[index].isAnimating = false
  }, 600)
}

const triggerRipple = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const ripple = document.createElement('div')
  const rect = target.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)

  ripple.style.width = ripple.style.height = size + 'px'
  ripple.style.left = (event.clientX - rect.left - size / 2) + 'px'
  ripple.style.top = (event.clientY - rect.top - size / 2) + 'px'
  ripple.classList.add('absolute', 'rounded-full', 'bg-white', 'opacity-50', 'animate-ping', 'pointer-events-none')

  target.appendChild(ripple)

  setTimeout(() => {
    ripple.remove()
  }, 600)
}

// Typing animation
const typeTitle = () => {
  let i = 0
  const interval = setInterval(() => {
    if (i < title.length) {
      displayedTitle.value += title.charAt(i)
      i++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        isTyping.value = false
      }, 1000)
    }
  }, 100)
}

onMounted(() => {
  // Start typing animation
  setTimeout(typeTitle, 500)

  // Set up intersection observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === contentRef.value && entry.isIntersecting) {
          isVisible.value = true
        }
        if (entry.target === interestsRef.value && entry.isIntersecting) {
          interestsVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  if (contentRef.value) observer.observe(contentRef.value)
  if (interestsRef.value) observer.observe(interestsRef.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.about-me {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  min-height: 100vh;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(40px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out 0.3s both;
}

.interest-card {
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.interest-card:hover {
  border-color: rgba(147, 51, 234, 0.3);
  box-shadow: 0 20px 40px rgba(147, 51, 234, 0.1);
}

.interest-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.interest-card:hover::before {
  left: 100%;
}

/* Enhanced responsive design */
@media (max-width: 1023px) {
  .grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .image-container {
    max-width: 400px;
  }
}

@media (max-width: 767px) {
  .grid.md\:grid-cols-2.lg\:grid-cols-4 {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}

/* Particle animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  33% {
    transform: translateY(-10px) rotate(120deg);
  }

  66% {
    transform: translateY(5px) rotate(240deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
