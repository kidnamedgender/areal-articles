import axios from 'axios';

export default {
  actions: {
    getArticles: async function (context) {
      try {
        const { data } = await axios.get(`http://localhost:5555/articles`);
        context.commit('updateArticles', data);
      } catch (err) {
        console.log(err);
      }
    },
    postArticle: async function (_, data) {
      try {
        await axios.post(`http://localhost:5555/article`, data);
      } catch (err) {
        console.log(err);
      }
    },

    getArticle: async function (context, articleId) {
      try {
        const { data } = await axios.get(`http://localhost:5555/article/${articleId}`);
        context.commit('updateArticle', data);
      } catch (err) {
        console.log(err);
      }
    },

    deleteArticle: async function (_, articleId) {
      try {
        await axios.delete(`http://localhost:5555/article/${articleId}`);
      } catch (err) {
        console.log(err);
      }
    },

    updateArticle: async function (_, req) {
      try {
        const [articleId, data] = req;
        await axios.patch(`http://localhost:5555/article/${articleId}`, data);
      } catch (err) {
        console.log(err);
      }
    },
  },

  mutations: {
    updateArticles(state, data) {
      state.articles = data;
    },
    updateArticle(state, data) {
      state.article = data;
    },
  },
  state: {
    articles: [],
    article: {},
  },
  getters: {
    articles(state) {
      return state.articles;
    },
    article(state) {
      return state.article;
    },
  },
};
