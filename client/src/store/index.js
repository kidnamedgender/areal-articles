import { createStore } from 'vuex';
import article from './modules/article';
import comment from './modules/comment';

const store = createStore({
  modules: {
    article,
    comment,
  },
});

export default store;
