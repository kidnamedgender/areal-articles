<template>
  <div class="pt-[40px]">
    <div
      v-for="comment in comments"
      class="max-w-[800px] mb-5 bg-mainBlockBlue p-[40px] border-[2px] border-mainStrokeGray">
      <div class="flex justify-between gap-[40px]">
        <p class="text-mainWhite text-justify break-words max-w-[500px]">{{ comment.text }}</p>
        <Controls
          :remove="() => remove(comment.id)"
          :path="`${this.$route.params.id}/${comment.id}/update-comment`" />
      </div>
    </div>
    <div v-if="showModal" class="modal-route">
      <div class="modal-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import Controls from './Controls.vue';

export default {
  data: function () {
    return {
      showModal: false,
    };
  },
  computed: mapGetters(['comments']),
  methods: {
    ...mapActions(['deleteComment', 'getComments']),

    remove: async function (commentId) {
      await this.deleteComment([this.$route.params.id, commentId]);
      this.getComments(this.$route.params.id);
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
  created() {
    this.getComments(this.$route.params.id);
  },
  components: {
    Controls,
  },
};
</script>
