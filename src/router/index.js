import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import BlogList from '../components/BlogList.vue'
import BlogDetail from '../components/BlogDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetail',
    component: BlogDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router