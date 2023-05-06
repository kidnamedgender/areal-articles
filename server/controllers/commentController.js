import { Comment } from '../models/Comment.js';
import { Article } from '../models/Article.js';

import { Op } from 'sequelize';

import moment from 'moment/moment.js';

const postComment = async (req, res) => {
  try {
    const articleId = req.params.id;
    const comment = await Comment.create({
      title: req.body.title,
      text: req.body.text,
      articleId,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось отправить комментарий.' });
  }
};

const getComments = async (req, res) => {
  try {
    const articleId = req.params.id;
    const comments = await Comment.findAll({
      where: { articleId },
    });
    res.status(201).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getComment = async (req, res) => {
  try {
    const articleId = req.params.id;
    const commentId = req.params.comment_id;
    const comment = await Comment.findOne({
      where: {
        articleId,
        id: commentId,
      },
    });
    res.status(200).json(comment);
  } catch (err) {
    res.status(404).json({ message: 'Не удалось найти комментарий.' });
  }
};

const updateComment = async (req, res) => {
  try {
    const articleId = req.params.id;
    const commentId = req.params.comment_id;

    const comment = await Comment.update(
      {
        text: req.body.text,
      },
      {
        where: {
          articleId,
          id: commentId,
        },
      },
    );
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось обновить комментарий.' });
  }
};

const deleteComment = async (req, res) => {
  try {
    const articleId = req.params.id;
    const commentId = req.params.comment_id;

    const comment = await Comment.destroy({
      where: {
        articleId,
        id: commentId,
      },
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось удалить комментарий.' });
  }
};

const getCommentsBetweenDates = async (req, res) => {
  try {
    const dateFrom = req.query.dateFrom;
    const dateTo = req.query.dateTo;

    const comments = await Comment.findAll({
      order: [['articleId', 'ASC']],
      include: Article,
      where: {
        createdAt: {
          [Op.and]: {
            [Op.gte]: new Date(moment(dateFrom).format()),
            [Op.lte]: new Date(moment(dateTo).format()),
          },
        },
      },
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось отфильтровать комментарии.' });
  }
};

export {
  postComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
  getCommentsBetweenDates,
};
