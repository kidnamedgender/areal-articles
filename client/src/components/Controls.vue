<template>
  <div class="flex gap-5 text-mainOrange font-medium text-[14px]">
    <router-link :to="path">
      <p>Редакт.</p>
    </router-link>
    <p class="cursor-pointer" @click="remove">Удалить</p>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    remove: Function,
  },
};
</script>
