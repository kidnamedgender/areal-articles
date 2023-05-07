<template>
  <div class="pt-[40px]">
    <NotFound :title="'Оставьте свое мнение'" v-if="!comments.length" />
    <CommentItem :comments="comments" />
    <div v-if="showModal" class="modal-route">
      <div class="modal-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import CommentItem from './CommentItem.vue';
import NotFound from './NotFound.vue';

export default {
  data: function () {
    return {
      showModal: false,
    };
  },
  computed: mapGetters(['comments']),
  methods: {
    ...mapActions(['deleteComment', 'getComments']),
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
    CommentItem,
    NotFound,
  },
};
</script>
