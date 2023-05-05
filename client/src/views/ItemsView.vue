<template>
  <div class="content">
    <div>
      <h1 class="text-[36px] text-mainOrange font-semibold">Статьи</h1>
    </div>
    <div class="flex justify-center pt-[80px]">
      <ArticlesList :articles="articles" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ArticlesList from '../components/ArticlesList.vue';

export default {
  data: function () {
    return {
      articles: [],
    };
  },

  components: {
    ArticlesList,
  },
  methods: {
    getArticles: async function () {
      try {
        const { data } = await axios.get('http://localhost:5555/articles');
        this.articles = data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  created() {
    this.getArticles();
  },
};
</script>
