<template>
  <div class="content border-b-[2px] border-b-mainStrokeGray flex justify-between text-mainOrange">
    <router-link :to="'/articles'"><p>Главная</p></router-link>
    <router-link :to="'/create-article'"><p>Создать статью</p></router-link>
  </div>
</template>
<script>
export default {};
</script>
