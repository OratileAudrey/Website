<template>
  <div class="relative w-full">
    <!-- Full-width hero video section -->
    <section class="hero-video-section">
      <div class="hero-video-fixed">
        <video ref="videoRef" autoplay muted loop playsinline preload="metadata">
          <source src="/videos/landing-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="hero-overlay">
        <div class="hero-content">
          <p class="hero-description">Tech • Travel • Content</p>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section id="about">
      <AboutMe />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AboutMe from '@/components/pages/AboutMe.vue'

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.log('Auto-play was prevented:', error)
    })
  }
})
</script>

<style scoped>
.hero-video-section {
  position: relative;
  width: 100vw;
  height: 70vh;
  margin-left: calc(-50.5vw + 50%);
  overflow: hidden;
  background: transparent;
}

.hero-video-fixed {
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 70vh;
  z-index: -1;
  overflow: hidden;
}

.hero-video-fixed video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  padding: 2rem;
}

#about {
  background: white;
}

@media (min-width: 768px) {
  .hero-video-fixed {
    top: 5rem;
  }
}

/* Mobile: shorter video */
@media (max-width: 768px) {

  .hero-video-section,
  .hero-video-fixed {
    height: 30vh;
  }
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero-description {
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  color: #f1f5f9;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .hero-description {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .hero-description {
    font-size: 0.7rem;
  }
}
</style>
