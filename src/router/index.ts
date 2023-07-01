// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/canteen/:canteen_path',
        name: 'Canteen',
        component: () => import('@/views/CanteenView.vue'),
      },
      {
        path: '/canteen/:canteen_path/:window_path',
        name: 'Window',
        component: () => import('@/views/WindowView.vue'),
      },
      {
        path: '/issues',
        name: 'Issues',
        component: () => import('@/views/IssueView.vue'),
      },
      {
        path: '/ref',
        name: 'Reference',
        component: () => import('@/views/ReferenceView.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
