<template>
  <div class="content">
    <Title :name="'Статьи'" :backB="false" />
    <div class="flex justify-center pt-[80px]">
      <ArticlesList />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import ArticlesList from '../components/ArticlesList.vue';
import Title from '../components/Title.vue';

export default {
  methods: mapActions(['getArticles']),

  components: {
    ArticlesList,
    Title,
  },

  created() {
    this.getArticles();
  },
};
</script>
