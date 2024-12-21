import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditView from '@/views/EditView.vue'
import DetailView from '@/views/DetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
      props: true, 
    },
   
    {
      path: '/detail/:id',  
      name: 'detail',
      component: DetailView,  
    },
   
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
