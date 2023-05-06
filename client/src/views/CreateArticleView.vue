<template>
  <div class="content">
    <Title :name="'Создать статью'" :backB="true" />
    <div class="pt-[100px] max-w-[800px] mx-auto text-mainWhite">
      <div class="mb-[5px] flex items-center gap-[5px]">
        <input
          class="px-[10px] w-[80%] h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="text"
          v-model="form.title"
          placeholder="Название статьи" />
        <button
          @click="create"
          class="w-[20%] h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
          Создать
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
import { mapActions } from 'vuex';

import Title from '../components/Title.vue';

export default {
  data() {
    return {
      form: {
        title: '',
        text: '',
      },
    };
  },
  methods: {
    ...mapActions(['postArticle', 'getArticles']),

    create: async function () {
      await this.postArticle(this.form);
      this.$router.replace({ path: '/articles' });
    },
  },

  components: {
    Title,
  },
};
</script>
