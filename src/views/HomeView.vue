<template>
  <div class="relative w-full overflow-hidden bg-black">
    <!-- Video Container with YouTube-style behavior -->
    <div class="video-container">
      <video ref="videoRef" class="responsive-video" autoplay muted loop playsinline preload="metadata"
        @loadeddata="onVideoLoaded">
        <source src="/videos/landing-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  <section id="about">
    <AboutMe />
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AboutMe from '@/components/pages/AboutMe.vue'

// Template ref for the video element
const videoRef = ref<HTMLVideoElement | null>(null)

// Handle video loaded event
const onVideoLoaded = () => {
  console.log('Video loaded successfully')
}

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.log('Auto-play was prevented:', error)
    })
  }
})
</script>

<style scoped>
/* YouTube-style video container */
.video-container {
  width: 100%;
  max-height: 40vh;
  /* Maximum 40% of viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  overflow: hidden;
}

/* Responsive video that maintains aspect ratio */
.responsive-video {
  width: 100%;
  height: auto;
  max-height: 40vh;
  object-fit: contain;
  /* Maintains aspect ratio without cropping */
  display: block;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .video-container {
    max-height: 35vh;
    /* Slightly smaller on mobile */
  }

  .responsive-video {
    max-height: 35vh;
  }
}

@media (max-width: 480px) {
  .video-container {
    max-height: 30vh;
    /* Even smaller on very small screens */
  }

  .responsive-video {
    max-height: 30vh;
  }
}

/* Ensure video is centered and responsive */
@media (min-width: 1024px) {
  .video-container {
    max-height: 60vh;
  }

  .responsive-video {
    max-height: 60vh;
  }
}
</style>
