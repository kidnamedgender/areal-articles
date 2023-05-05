import { createRouter, createWebHistory } from 'vue-router';

import ItemsView from '../views/ItemsView.vue';
import ItemView from '../views/ItemView.vue';

const routes = [
  {
    path: '/articles',
    component: ItemsView,
  },
  {
    path: '/article/:id',
    component: ItemView,
  },
  {
    path: '/:catchAll(.*)',
    component: ItemsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
