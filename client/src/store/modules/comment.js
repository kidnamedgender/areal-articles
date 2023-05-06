import axios from 'axios';

export default {
  actions: {
    getComments: async function (context, articleId) {
      try {
        const { data } = await axios.get(`http://localhost:5555/article/${articleId}/comments`);
        context.commit('updateComments', data);
      } catch (err) {
        console.log(err);
      }
    },
    postComment: async function (_, req) {
      try {
        const [data, articleId] = req;
        await axios.post(`http://localhost:5555/article/${articleId}/comment`, data);
      } catch (err) {
        console.log(err);
      }
    },
    deleteComment: async function (_, req) {
      try {
        const [articleId, commentId] = req;
        await axios.delete(`http://localhost:5555/article/${articleId}/comment/${commentId}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    updateComments(state, data) {
      state.comments = data;
    },
  },
  state: {
    comments: [],
  },
  getters: {
    comments(state) {
      return state.comments;
    },
  },
};
