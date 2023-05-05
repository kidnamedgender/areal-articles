import { Comment } from '../models/Comment.js';

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

export { postComment, getComments, getComment, updateComment, deleteComment };
