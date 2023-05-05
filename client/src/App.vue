<template>
  <!-- header -->
  <div class="content border-b-[2px] border-b-mainStrokeGray flex justify-between text-mainOrange">
    <router-link :to="'/articles'"><p>Главная</p></router-link>
    <p>Создать статью</p>
  </div>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
