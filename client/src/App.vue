<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue';
import UpdateCommentModal from './components/UpdateCommentModal.vue';
export default {
  components: {
    Header,
    UpdateCommentModal,
  },
};
</script>
