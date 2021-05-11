import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Direct/index.vue'),  },
  {
    path: '/explore',
    name: 'Explore',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Explore/index.vue'),
  },
  {
    path: '/heart',
    name: 'Heart',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Heart/index.vue'),  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile'),
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () =>
          import(/* webpackChunkName: "ProfilePost" */ '../views/Profile/post.vue')
      },
      {
        path: 'igtv',
        name: 'ProfileIGTV',
        component: () =>
          import(/* webpackChunkName: "ProfilePost" */ '../views/Profile/igtv.vue')
      },
      {
        path: 'save',
        name: 'ProfileSave',
        component: () =>
          import(/* webpackChunkName: "ProfilePost" */ '../views/Profile/save.vue')
      },
      {
        path: 'tag',
        name: 'ProfileTag',
        component: () =>
          import(/* webpackChunkName: "ProfilePost" */ '../views/Profile/tag.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
