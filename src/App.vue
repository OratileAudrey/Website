<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader />
  <main class="pt-20">
    <RouterView></RouterView>
  </main>
  <AppFooter />
</template>
