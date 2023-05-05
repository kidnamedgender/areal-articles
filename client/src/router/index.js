import { createRouter, createWebHistory } from 'vue-router';

import ItemsView from '../views/ItemsView.vue';
import ItemView from '../views/ItemView.vue';
import CreateArticleView from '../views/CreateArticleView.vue';
import UpdateArticleView from '../views/UpdateArticleView.vue';

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
    path: '/create-article',
    component: CreateArticleView,
  },
  {
    path: '/article/:id/update-article',
    component: UpdateArticleView,
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
