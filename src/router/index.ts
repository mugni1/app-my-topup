import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '@/views/SuccessView.vue'
import CoView from '@/views/CoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/co', name: 'co_view', component: CoView },
    { path: '/success', name: 'payment_success', component: SuccessView },
  ],
})

export default router
