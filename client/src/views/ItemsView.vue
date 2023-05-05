<template>
  <div class="content">
    <div>
      <h1 class="text-[36px] text-mainOrange font-semibold">Статьи</h1>
    </div>
    <div class="flex justify-center pt-[80px]">
      <table class="table-fixed border-b border-mainStrokeGray bg-mainBlockBlue">
        <thead>
          <tr class="border-b h-[50px] border-mainStrokeGray text-center">
            <th class="w-[100px]">ID</th>
            <th>Заголовок</th>
            <th>Текст</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody class="text-mainWhite h-[150px]">
          <tr
            class="border-b border-mainStrokeGray cursor-pointer hover:bg-mainStrokeGray h-[80px]"
            v-for="article in articles"
            :key="article.id"
            @click="this.$router.push({ path: `article/${article.id}` })">
            <td>
              {{ article.id }}
            </td>

            <td>
              {{ article.title }}
            </td>
            <td>
              {{ article.text }}
            </td>
            <td class="font-mons">
              {{ new Date(article.createdAt).toLocaleDateString() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      articles: [],
    };
  },

  methods: {
    getArticles: async function () {
      try {
        const { data } = await axios.get('http://localhost:5555/articles');
        this.articles = data;
      } catch (err) {
        console.log(err);
      }
    },
  },

  created() {
    this.getArticles();
  },
};
</script>
