import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import UserListPage from './components/UserListPage.vue';
import MapPage from './components/MapPage.vue'
import UserEditPage from './components/UserEdit.vue'
import Form from './components/Form.vue';
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
    path: '/user-edit',
    component: UserEditPage
  },
  {
    path: '/map',
    component: MapPage
  },
  {
    path: '/form',
    component: Form
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
