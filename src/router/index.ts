import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Views } from './views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Views.Home,
      name: 'home',
      component: HomeView
    },
    {
      path: Views.Products,
      name: 'products',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: Views.Sectors,
      name: 'sectors',
      component: () => import('../views/SectorView.vue')
    },
    {
      path: Views.Services,
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: Views.Career,
      name: 'career',
      component: () => import('../views/CareerView.vue')
    },
    {
      path: Views.Feed,
      name: 'feed',
      component: () => import('../views/FeedView.vue')
    },
    {
      path: Views.About,
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: Views.Contact,
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
