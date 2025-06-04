import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '../stores/app' // 确保正确导入useAppStore

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductCenterView.vue'),
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 权限拦截
router.beforeEach((to, from) => {
  const store = useAppStore() // 使用useAppStore
  if (to.meta.requiresAdmin && !store.isAdmin) {
    return { name: 'Home' }
  }
})

export default router