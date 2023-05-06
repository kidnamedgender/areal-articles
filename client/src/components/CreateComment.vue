<template>
  <div class="pt-[30px] space-x-2 text-mainWhite">
    <input
      class="px-[10px] min-w-[665px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
      type="text"
      v-model="form.text"
      placeholder="Комментарий" />

    <button
      @click="submit"
      class="min-w-[130px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
      Оставить
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        text: '',
      },
    };
  },
  methods: {
    ...mapActions(['postComment', 'getComments']),
    submit: async function () {
      if (this.form.text) {
        await this.postComment([this.form, this.$route.params.id]);
        this.getComments(this.$route.params.id);
        this.form.text = '';
      } else alert('Не оставляйте поля пустыми');
    },
  },
};
</script>
<style></style>
