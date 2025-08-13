<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
/* Smooth scrolling with proper offset for fixed header */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
  /* 64px - matches mobile padding */
}

@media (min-width: 768px) {
  html {
    scroll-padding-top: 5rem;
    /* 80px - matches desktop padding */
  }
}
</style>

<template>
  <AppHeader />
  <main class="pt-16 md:pt-20">
    <RouterView></RouterView>
  </main>
  <AppFooter />
</template>
