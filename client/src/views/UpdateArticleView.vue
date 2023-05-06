<template>
  <div class="content">
    <Title :name="'Редактировать статью'" :backB="true" />
    <div class="pt-[100px] max-w-[800px] mx-auto text-mainWhite">
      <div class="mb-[5px] flex items-center gap-[5px]">
        <input
          class="px-[10px] w-[80%] h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="text"
          v-model="form.title"
          placeholder="Название статьи" />
        <button
          @click="update"
          class="w-[20%] h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
          Редактировать
        </button>
      </div>
      <textarea
        v-model="form.text"
        class="w-[100%] p-[10px] h-[444px] bg-mainBlockBlue resize-none border-[2px] break-words border-mainStrokeGray"
        placeholder="Содержание статьи. Макс. длина 4000 "></textarea>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import Title from '../components/Title.vue';

export default {
  computed: mapGetters(['article']),
  data() {
    return {
      form: {
        title: '',
        text: '',
      },
    };
  },
  methods: {
    ...mapActions(['updateArticle', 'getArticle']),
    update: async function () {
      await this.updateArticle([this.$route.params.id, this.form]);
      this.$router.go(-1);
    },
  },
  created() {
    this.getArticle(this.$route.params.id);
  },
  watch: {
    article() {
      this.form.title = this.article.title;
      this.form.text = this.article.text;
    },
  },
  components: {
    Title,
  },
};
</script>
