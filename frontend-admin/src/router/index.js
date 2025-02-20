import {createRouter,  createWebHistory} from 'vue-router';
import {ElMessage} from "element-plus";

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/AdminLogin.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/HomePage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('session');
  if (to.path !== '/login' && !isAuthenticated) {
    ElMessage.warning('You are not logged in. Please log in to continue.');
    next('/login');
  } else {
    next();
  }
});

export default router;
