<template>
  <div
    v-for="comment in comments"
    class="max-w-[800px] mb-5 bg-mainBlockBlue p-[40px] border-[2px] border-mainStrokeGray">
    <p class="text-mainOrange font-semibold" v-if="comment.article?.title">
      {{ comment.article?.title }}
    </p>
    <div class="flex justify-between gap-[40px]">
      <p class="text-mainWhite text-justify break-words max-w-[500px]">{{ comment.text }}</p>
      <div class="space-y-2">
        <Controls
          :remove="() => remove(comment.id, comment.articleId)"
          :path="`/article/${comment.articleId}/${comment.id}/update-comment`" />
        <p class="font-mons text-mainOrange text-right">
          {{ new Date(comment.createdAt).toLocaleDateString() }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Controls from './Controls.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    Controls,
  },
  methods: {
    ...mapActions(['deleteComment', 'getComments', 'filterComments']),
    remove: async function (commentId, articleId) {
      await this.deleteComment([articleId, commentId]);
      if (document.location.pathname !== '/analytic/comments') this.getComments(articleId);
      else this.filterComments([this.dateFrom, this.dateTo]);
    },
  },
  props: {
    comments: Array,
    dateFrom: String,
    dateTo: String,
  },
};
</script>
