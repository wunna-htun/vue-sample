import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import UserListPage from './components/UserListPage.vue';
import MapPage from './components/MapPage.vue'
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/user-list',
    component: UserListPage
  },
  {
    path: '/map',
    component: MapPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
