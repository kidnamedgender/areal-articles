<template>
  <div class="content">
    <Title :name="'Фильтрация комментариев'" :backB="true" />

    <div class="text-mainWhite pt-[20px]">
      <div class="flex gap-5 font-mons jusify-center items-end">
        <input
          class="px-[10px] min-h-[50px] min-w-[200px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="date"
          v-model="dateFrom"
          placeholder="Комментарий" />
        <input
          class="px-[10px] min-w-[200px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="date"
          v-model="dateTo"
          placeholder="Комментарий" />
        <button
          @click="submit"
          class="mt-[10px] min-w-[130px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
          Фильтровать
        </button>
      </div>
    </div>
    <div class="mt-[80px]">
      <CommentItem :comments="filtredComments" :dateFrom="dateFrom" :dateTo="dateTo" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import Title from '../components/Title.vue';
import CommentItem from '../components/CommentItem.vue';

export default {
  data() {
    return {
      dateFrom: '1999-01-01',
      dateTo: '2024-01-01',
    };
  },
  computed: mapGetters(['filtredComments']),
  methods: {
    ...mapActions(['filterComments']),
    submit: async function () {
      await this.filterComments([this.dateFrom, this.dateTo]);
      this.$router.push({ query: { dateFrom: this.dateFrom, dateTo: this.dateTo } });
      console.log();
    },
  },

  components: {
    Title,
    CommentItem,
  },
  created() {
    if (this.$route.query.dateFrom || this.$route.query.dateTo) {
      this.dateFrom = this.$route.query.dateFrom;
      this.dateTo = this.$route.query.dateTo;
    }
    this.submit();
  },
};
</script>
