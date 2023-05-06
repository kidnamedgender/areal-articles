import { createRouter, createWebHistory } from 'vue-router';

import ItemsView from '../views/ItemsView.vue';
import ItemView from '../views/ItemView.vue';
import CreateArticleView from '../views/CreateArticleView.vue';
import UpdateArticleView from '../views/UpdateArticleView.vue';
import AnalystView from '../views/AnalystView.vue';

import UpdateCommentModal from '../components/UpdateCommentModal.vue';

const routes = [
  {
    path: '/articles',
    component: ItemsView,
  },
  {
    path: '/article/:id',
    component: ItemView,

    children: [
      {
        path: ':comment_id/update-comment',
        component: UpdateCommentModal,
        props: true,
        meta: {
          showModal: true,
        },
      },
    ],
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
    path: '/analytic/comments',
    component: AnalystView,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/articles',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
