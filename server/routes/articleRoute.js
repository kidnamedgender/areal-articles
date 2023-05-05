import express from 'express';

import { postArticle, getArticle, updateArticle } from '../controllers/articleController.js';

const router = express.Router();

router.post('/', postArticle);
// router.get('/articles', getArticles);
router.get('/:id', getArticle);
router.patch('/:id', updateArticle);
// router.delete('/:id', deleteArticle);

export { router };
