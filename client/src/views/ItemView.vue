<template>
  <div class="content">
    <Title :name="'Просмотр статьи'" :backB="true" />
    <div>
      <div
        class="max-w-[730px] mt-[80px] p-[40px] bg-[rgb(29,39,51)] border-[2px] border-mainStrokeGray">
        <div class="flex justify-between items-end pb-[35px] text-mainOrange text-[14px]">
          <h1 class="text-[28px] max-w-[400px] break-words">{{ article.title }}</h1>
          <Controls :path="`${this.$route.params.id}/update-article`" :remove="remove" />
        </div>
        <p class="text-justify text-mainWhite">{{ article.text }}</p>
      </div>
      <CreateComment />
      <CommentsList />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Title from '../components/Title.vue';
import CreateComment from '../components/CreateComment.vue';
import CommentsList from '../components/CommentsList.vue';
import Controls from '../components/Controls.vue';

export default {
  computed: mapGetters(['article']),

  methods: {
    ...mapActions(['getArticle', 'deleteArticle', 'getArticles']),

    remove: async function () {
      await this.deleteArticle(this.$route.params.id);
      this.$router.replace({ path: '/articles' });
    },
  },

  created() {
    this.getArticle(this.$route.params.id);
  },

  components: {
    Title,
    CreateComment,
    CommentsList,
    Controls,
  },
};
</script>
