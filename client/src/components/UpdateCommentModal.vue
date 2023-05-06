<template>
  <div class="bg-[rgba(0,0,0,0.2)] top-0 left-0 w-[100%] h-[100%] flex items-center fixed">
    <div class="bg-mainBlockBlue min-h-[400px] max-w-[900px] mx-auto p-10">
      <div class="flex justify-between items-end text-mainOrange">
        <h1 class="text-[24px] font-semibold">Редактирование комментария</h1>
      </div>
      <div class="pt-[30px] space-x-2 text-mainWhite flex items-start">
        <textarea
          class="p-[10px] min-w-[665px] min-h-[200px] bg-mainBlockBlue border-[2px] border-mainStrokeGray resize-none"
          type="text"
          placeholder="Комментарий"
          v-model="form.text"></textarea>

        <button
          @click="update"
          class="min-w-[130px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
          Исправить
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        text: '',
      },
    };
  },
  methods: {
    ...mapActions(['getComment', 'updateComment', 'getComments']),
    update: async function () {
      this.updateComment([this.$route.params.id, this.$route.params.comment_id, this.form]);
      this.$router.go(-1);
      this.getComments(this.$route.params.id);
    },
  },
  computed: mapGetters(['comment']),

  created() {
    this.getComment([this.$route.params.id, this.$route.params.comment_id]);
  },
  watch: {
    comment() {
      this.form.text = this.comment.text;
    },
  },
};
</script>
