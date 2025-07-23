import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FunTravels from '@/components/pages/FunTravels.vue'
import ContactMe from '@/components/pages/ContactMe.vue'
import TravelJourney from '@/components/pages/TravelJourney.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/travel',
    name: 'travel',
    component: TravelJourney,
  },
  {
    path: '/fun-travels',
    name: 'funTravels',
    component: FunTravels,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactMe,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
