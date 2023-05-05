import express from 'express';

import {
  postArticle,
  getArticle,
  updateArticle,
  deleteArticle,
  getArticles,
} from '../controllers/articleController.js';

const router = express.Router();

router.post('/article', postArticle);
router.get('/articles', getArticles);
router.get('/article/:id', getArticle);
router.patch('/article/:id', updateArticle);
router.delete('/article/:id', deleteArticle);

export { router };
