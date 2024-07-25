import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/formations',
      name: 'Formations',
      component: () => import('../views/FormationsView.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
