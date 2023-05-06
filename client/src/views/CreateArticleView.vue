<template>
  <div class="content">
    <div class="flex justify-between items-end text-mainOrange">
      <h1 class="text-[36px] font-semibold">Создать статью</h1>
      <p @click="() => this.$router.go(-1)">Назад</p>
    </div>
    <div class="pt-[100px] max-w-[800px] mx-auto text-mainWhite">
      <div class="mb-[5px] flex items-center gap-[5px]">
        <input
          class="px-[10px] w-[80%] h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="text"
          v-model="form.title"
          placeholder="Название статьи" />
        <button
          @click="
            () => {
              postArticle(form);
              this.$router.push({ path: '/articles' });
            }
          "
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

export default {
  data() {
    return {
      form: {
        title: '',
        text: '',
      },
    };
  },
  methods: mapActions(['postArticle']),
};
</script>
