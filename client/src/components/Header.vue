<template>
  <div class="content border-b-[2px] border-b-mainStrokeGray flex justify-between text-mainOrange">
    <router-link :to="'/articles'"><p>Главная</p></router-link>
    <div class="flex gap-8">
      <router-link :to="'/analytic/comments'"><p>Аналитика</p></router-link>
      <router-link :to="'/create-article'"><p>Создать статью</p></router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
