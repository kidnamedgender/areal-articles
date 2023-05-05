import { Article } from '../models/Article.js';

const postArticle = async (req, res) => {
  try {
    const article = await Article.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось создать статью.' });
  }
};

const getArticles = async (_, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (err) {
    res.status(404).json({ message: 'Не удалось найти статьи.' });
  }
};

const getArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findOne({
      where: {
        id: articleId,
      },
    });
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ message: 'Не удалось найти статью.' });
  }
};

const updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.update(
      {
        title: req.body.title,
        text: req.body.text,
      },
      {
        where: {
          id: articleId,
        },
      },
    );
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось обновить статью.' });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.destroy({
      where: { id: articleId },
    });
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'Не удалось удалить статью.' });
  }
};

export { postArticle, getArticles, getArticle, updateArticle, deleteArticle };
