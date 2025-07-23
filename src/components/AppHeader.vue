<template>
  <header class="main-header">
    <div class="header-container">
      <!-- Logo/Name on the left -->
      <div class="brand-section">
        <router-link to="/" class="brand-link">
          <h1 class="brand-name">Oratile Audrey</h1>
        </router-link>
      </div>

      <!-- Navigation on the right -->
      <nav class="main-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#about" class="nav-link" @click="scrollToSection('about')">About</a>
          </li>
          <li class="nav-item">
            <router-link to="/travel" class="nav-link">Travel</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/fun-travels" class="nav-link">Fun Travels</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': mobileMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </nav>

      <!-- Mobile menu overlay -->
      <div class="mobile-menu-overlay" :class="{ 'active': mobileMenuOpen }" @click="closeMobileMenu">
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li class="mobile-nav-item">
              <a href="#about" class="mobile-nav-link" @click="scrollToSection('about')">About</a>
            </li>
            <li class="mobile-nav-item">
              <router-link to="/travel" class="mobile-nav-link" @click="closeMobileMenu">Travel</router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link to="/fun-travels" class="mobile-nav-link" @click="closeMobileMenu">Fun Travels</router-link>
            </li>
            <li class="mobile-nav-item">
              <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)
const route = useRoute()
const router = useRouter()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToSection = (sectionId: string) => {
  if (route.path !== '/') {
    router.push({ path: '/', hash: `#${sectionId}` })
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  closeMobileMenu()
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 116, 139, 0.2);
  transition: all 0.3s ease;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Brand Section */
.brand-section {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
}

.brand-link:hover {
  opacity: 0.8;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
}

/* Desktop Navigation */
.main-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: sans-serif;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.3px;
}

.nav-link:hover {
  color: #a855f7;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background: #e2e8f0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  min-width: 280px;
  border: 1px solid rgba(100, 116, 139, 0.2);
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-item {
  text-align: center;
}

.mobile-nav-link {
  text-decoration: none;
  color: #e2e8f0;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: block;
}

.mobile-nav-link:hover {
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
  }

  .brand-name {
    font-size: 1.5rem;
  }

  .nav-list {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}

@media (max-width: 1024px) {
  .nav-list {
    gap: 1.5rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}

/* Scroll Effect */
.main-header.scrolled {
  background: rgba(15, 23, 42, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

/* Active router link styling */
.router-link-active {
  color: #a855f7 !important;
}

.router-link-active::after {
  width: 100% !important;
}

/* Glowing effect for brand name */
.brand-name {
  position: relative;
}

.brand-name::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f59e0b 100%);
  -webkit-background-clip: text;
  background-clip: text;
  filter: blur(8px);
  opacity: 0.3;
  z-index: -1;
}

/* Subtle animations */
.nav-link {
  position: relative;
  overflow: hidden;
}
</style>
