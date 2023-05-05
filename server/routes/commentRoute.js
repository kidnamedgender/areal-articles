import express from 'express';

import {
  postComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
  getCommentsBetweenDates,
} from '../controllers/commentController.js';

const router = express.Router();

router.post('/article/:id/comment', postComment);
router.get('/article/:id/comments', getComments);
router.get('/article/:id/comment/:comment_id', getComment);
router.patch('/article/:id/comment/:comment_id', updateComment);
router.delete('/article/:id/comment/:comment_id', deleteComment);

router.get('/analytic/comments/', getCommentsBetweenDates);

export { router };
