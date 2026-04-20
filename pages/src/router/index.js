import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '@/views/NewsView.vue'
import ContactView from '../views/ContactView.vue'
import ArticleView from '@/views/ArticleView.vue'
import NavTestView from '@/views/NavTestView.vue'
import UserView from '@/views/UserView.vue'
import UserPostsView from '@/views/UserPostsView.vue'
import UserProfileView from '@/views/UserProfileView.vue'
import UserSettingsView from '@/views/UserSettingsView.vue'
import AdminView from '@/views/AdminView.vue'
import { isLoading } from '@/loadingStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/article',
      name: 'article0',
      component: ArticleView,
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView,
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/EditView.vue'),
    },
    {
      path: '/nav-test',
      name: 'navtest',
      component: NavTestView,
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      children: [
        {
          path: 'profile',
          component: UserProfileView
        },
        {
          path: 'posts',
          component: UserPostsView
        },
        {
          path: 'settings',
          component: UserSettingsView
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: () => {
        const isAdmin = localStorage.getItem("isAdmin") === "true"; // 把存進去的字串 true/false 轉換成布林值 true/false
        console.log(isAdmin);
        if (!isAdmin) {
          alert("沒有管理權限!!");
          return false;
        }
      }
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  isLoading.value = true;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  })
  isLoading.value = false;
  next()
})

router.afterEach(() => {
  isLoading.value = false;
});

export default router
