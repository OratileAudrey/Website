<template>
  <div class="relative w-screen h-[60vh] overflow-hidden">
    <!-- Video Background -->
    <video ref="videoRef" class="absolute top-0 left-0 w-screen h-full object-cover" autoplay muted loop playsinline
      preload="metadata" @loadeddata="onVideoLoaded">
      <source src="/videos/landing-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <section id="about">
    <AboutMe />
  </section>
  <!-- <section id="contact">
    <ContactMe />
  </section> -->
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

<style scoped></style>
