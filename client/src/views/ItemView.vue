<template>
  <div class="content">
    <div class="flex justify-between items-end text-mainOrange">
      <h1 class="text-[36px] font-semibold">Просмотр статьи</h1>
      <p @click="() => this.$router.go(-1)">Назад</p>
    </div>
    <div>
      <div
        class="max-w-[730px] mt-[80px] p-[40px] bg-[rgb(29,39,51)] border-[2px] border-mainStrokeGray">
        <div class="flex justify-between items-end pb-[35px] text-mainOrange text-[14px]">
          <h1 class="text-[28px] max-w-[400px] break-words">{{ article.title }}</h1>
          <div class="flex gap-5 font-medium">
            <router-link :to="`${this.$route.params.id}/update-article`">
              <p>Редакт.</p>
            </router-link>
            <p @click="deleteArticle">Удалить</p>
          </div>
        </div>
        <p class="text-justify text-mainWhite">{{ article.text }}</p>
      </div>
      <div class="pt-[30px] space-x-2 text-mainWhite">
        <input
          class="px-[10px] min-w-[665px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="text"
          v-model="form.text"
          placeholder="Комментарий" />

        <button
          @click="postComment"
          class="min-w-[130px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
          Оставить
        </button>
      </div>
      <div class="pt-[40px]">
        <div
          v-for="comment in comments"
          class="max-w-[800px] mb-5 bg-mainBlockBlue p-[40px] border-[2px] border-mainStrokeGray">
          <div class="flex justify-between gap-[40px]">
            <p class="text-mainWhite text-justify break-words max-w-[500px]">{{ comment.text }}</p>
            <div class="flex gap-5 text-mainOrange font-medium text-[14px]">
              <p>Редакт.</p>
              <p @click="() => deleteComment(comment.id)">Удалить</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { router } from '../router';

export default {
  data: function () {
    return {
      article: {},
      comments: [],
      form: {
        text: '',
      },
    };
  },

  methods: {
    getArticle: async function () {
      try {
        const { data } = await axios.get(`http://localhost:5555/article/${this.$route.params.id}`);
        this.article = data;
      } catch (err) {
        console.log(err);
      }
    },
    getComments: async function () {
      try {
        const { data } = await axios.get(
          `http://localhost:5555/article/${this.$route.params.id}/comments`,
        );
        this.comments = data;
      } catch (err) {
        console.log(err);
      }
    },
    deleteComment: async function (commentId) {
      try {
        await axios.delete(
          `http://localhost:5555/article/${this.$route.params.id}/comment/${commentId}`,
        );

        this.getComments();
      } catch (err) {
        console.log(err);
      }
    },

    postComment: async function () {
      try {
        await axios.post(
          `http://localhost:5555/article/${this.$route.params.id}/comment`,
          this.form,
        );
        this.form.text = '';
        this.getComments();
      } catch (err) {
        console.log(err);
      }
    },

    deleteArticle: async function () {
      try {
        await axios.delete(`http://localhost:5555/article/${this.$route.params.id}`);
        router.replace({ path: '/articles' });
      } catch (err) {
        console.log(err);
      }
    },
  },

  created() {
    this.getArticle();
    this.getComments();
  },
};
</script>
