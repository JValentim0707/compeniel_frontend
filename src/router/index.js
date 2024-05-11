// Route Files

import LoginAdmin from '../pages/AdminPage/LoginAdmin.vue'
import DashboardAdminPage from '../pages/AdminPage/DashboardAdmin.vue'

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [ 
  {
    name: 'LoginAdminPage',
    path: '/',
    component: LoginAdmin
  },
  // {
  //   name: 'LoginAdminPage',
  //   path: '/admin',
  //   component: LoginAdmin
  // },
  {
    name: 'DashboardAdminPage',
    path: '/dashboardAdmin',
    component: DashboardAdminPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
