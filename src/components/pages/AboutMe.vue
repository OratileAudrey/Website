<template>
  <section class="about-me py-16">
    <div class="max-w-6xl mx-auto">
      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content Section (Left) -->
        <div class="content-section space-y-6">
          <!-- Section Title -->
          <h1 class="text-4xl md:text-5xl font-bold mb-8 text-white">
            Hi, I'm Audrey
          </h1>

          <div class="prose prose-lg text-gray-200">
            <p class="text-xl leading-relaxed mb-8 text-gray-100">
              A South African explorer, creator, and storyteller who loves chasing sunsets, solo adventures, and
              meaningful connections.
            </p>

            <p class="text-lg leading-relaxed mb-8 text-gray-300">
              Whether it's bungee jumping off bridges, hiking lush trails, or capturing moments through my lens, I find
              joy in
              living fully and sharing it with others.
            </p>

            <p class="text-lg leading-relaxed text-gray-300">
              This space is where I blend my love for content creation, tech and travel. I believe life shouldn't be
              lived in one place—so I don't.
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
              <!-- <img src="@/assets/me.jpg" alt="Fun Travels Logo" class="w-full h-full object-contain" /> -->
            </div>
            <!-- Decorative overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
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
  background: rgba(15, 23, 42, 0.95);
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

/* Responsive adjustments */
@media (max-width: 1023px) {
  .grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .image-container {
    max-width: 400px;
    /* mx-auto; */
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

.animate-pulse {
  animation: pulse 2s infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}
</style>
