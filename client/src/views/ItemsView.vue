<template>
  <div class="content">
    <div>
      <h1 class="text-[36px] text-mainOrange font-semibold">Статьи</h1>
    </div>
    <div class="flex justify-center pt-[80px]">
      <ArticlesList />
    </div>
  </div>
</template>

<script>
import ArticlesList from '../components/ArticlesList.vue';

import { mapActions } from 'vuex';

export default {
  methods: mapActions(['getArticles']),

  components: {
    ArticlesList,
  },

  created() {
    this.getArticles();
  },
};
</script>
