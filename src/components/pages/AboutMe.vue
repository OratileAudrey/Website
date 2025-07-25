<template>
  <section class="about-me py-16">
    <div class="max-w-6xl mx-auto">
      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content Section (Left) -->
        <div class="content-section space-y-6 text-gray-800 ">
          <!-- Section Title -->
          <h1 class="text-4xl md:text-5xl  mb-8">
            Hi, I'm Audrey
          </h1>

          <div class="prose prose-lg">
            <p class="text-xl leading-relaxed mb-8">
              A South African explorer, creator, and storyteller who loves chasing sunsets, solo adventures, and
              meaningful connections.
            </p>

            <p class="text-lg leading-relaxed mb-8">
              Whether it's bungee jumping off bridges, hiking trails, or capturing moments through my lens, I find
              joy in
              living fully and sharing it with others.
            </p>

            <p class="text-lg leading-relaxed">
              This space is where I blend my love for content creation, tech and travel. I believe life shouldn't be
              lived in one place... so I don't.
            </p>
          </div>

          <!-- Decorative elements -->
          <div class="flex space-x-4 pt-8">
            <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <div class="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100"></div>
            <div class="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>

        <!-- Image Section (Right) -->
        <div class="image-container max-w-sm mx-auto lg:mx-0">
          <div
            class="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <!-- Placeholder for your image -->
            <div
              class="aspect-[3/4] bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
              <img src="@/assets/me.jpg" alt="Fun Travels Logo" class="w-full h-full object-contain" />
            </div>
            <!-- Decorative overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- My Interests Section -->
    <div class="max-w-7xl py-20 mx-auto">
      <div class="text-center mb-16 mt-16">
        <h2 class="text-3xl md:text-5xl text-gray-800 mb-6">Interests</h2>
        <p class="text-xl text-gray-600 max-w-3xl mb-4 mx-auto">
          Some of the things I enjoy doing
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500  mx-auto rounded-full"></div>
      </div>

      <!-- Interests Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

        <!-- Running & Trekking -->
        <div
          class="interest-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div
            class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Running & Trekking</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            Running helps me clear my head. Trekking reconnects me with nature. One step at a time, I’m working
            towards my first half-marathon.
          </p>
        </div>

        <!-- Coding -->
        <div
          class="interest-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div
            class="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Coding</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            I like building things, and coding lets me do that. It’s problem-solving, creative thinking, and
            pure magic when it works. (And yes I made this website myself)
          </p>
        </div>

        <!-- YouTube Content -->
        <div
          class="interest-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div
            class="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Content Creation</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            I love filming, editing, and sharing life’s adventures especially when I travel. My
            YouTube channel is where I bring those stories to life.
            It’s all about inspiring others to explore more and live fully.
          </p>
        </div>

        <!-- Reading -->
        <div
          class="interest-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div
            class="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253">
              </path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Reading</h3>
          <p class="text-gray-600 leading-relaxed mb-4">
            I turn to books for inspiration and growth. I enjoy real stories and ideas that challenge how I think. Some
            of my favorite
            authors include Dale Carnegie and Napoleon Hill.
          </p>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center">
        <div class="inline-flex space-x-4">
          <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-100"></div>
          <div class="w-3 h-3 bg-orange-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.about-me {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
  min-height: 100vh;
}

.image-container {
  position: relative;
  z-index: 2;
}

.content-section {
  position: relative;
  z-index: 2;
}

.interest-card {
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.interest-card:hover {
  border-color: rgba(147, 51, 234, 0.2);
}

/* Responsive adjustments */
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
  .grid.md\\:grid-cols-2.lg\\:grid-cols-3 {
    grid-template-columns: 1fr;
  }
}

/* Animation for the decorative dots */
@keyframes pulse {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.1);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
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
</style>
