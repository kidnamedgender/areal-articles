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
            <p
              @click="
                () => {
                  deleteArticle(this.$route.params.id);
                  this.$router.replace({ path: '/articles' });
                }
              ">
              Удалить
            </p>
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
          @click="submit"
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
              <p @click="() => remove(comment.id)">Удалить</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  computed: mapGetters(['article', 'comments']),

  data: function () {
    return {
      form: {
        text: '',
      },
    };
  },

  methods: {
    ...mapActions(['getArticle', 'getComments', 'postComment', 'deleteComment', 'deleteArticle']),

    submit: async function () {
      await this.postComment([this.form, this.$route.params.id]);
      this.getComments(this.$route.params.id);
      this.form.text = '';
    },

    remove: async function (commentId) {
      await this.deleteComment([this.$route.params.id, commentId]);
      this.getComments(this.$route.params.id);
    },
  },

  created() {
    this.getArticle(this.$route.params.id);
    this.getComments(this.$route.params.id);
  },
};
</script>
