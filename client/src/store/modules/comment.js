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
    getComment: async function (context, req) {
      try {
        const [articleId, commentId] = req;
        const { data } = await axios.get(
          `http://localhost:5555/article/${articleId}/comment/${commentId}`,
        );
        context.commit('updateComment', data);
      } catch (err) {
        console.log(err);
      }
    },

    updateComment: async function (_, req) {
      try {
        const [artcleId, commentId, data] = req;
        await axios.patch(`http://localhost:5555/article/${artcleId}/comment/${commentId}`, data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    updateComments(state, data) {
      state.comments = data;
    },
    updateComment(state, data) {
      state.comment = data;
    },
  },
  state: {
    comments: [],
    comment: {},
  },
  getters: {
    comments(state) {
      return state.comments;
    },
    comment(state) {
      return state.comment;
    },
  },
};
