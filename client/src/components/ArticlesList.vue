<template>
  <div>
    <table class="table-fixed border-b border-mainStrokeGray bg-mainBlockBlue">
      <thead>
        <tr class="border-b border-[2px] h-[50px] border-mainStrokeGray text-center">
          <th class="w-[100px]">ID</th>
          <th>Заголовок</th>
          <th>Текст</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody class="text-mainWhite h-[150px]">
        <tr
          class="border-b border-[2px] border-mainStrokeGray cursor-pointer hover:bg-mainStrokeGray h-[80px]"
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
</template>
<script>
export default {
  props: {
    articles: Array,
  },
};
</script>
