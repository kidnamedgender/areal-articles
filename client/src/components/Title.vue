<template>
  <div class="flex justify-between items-end text-mainOrange">
    <h1 class="text-[36px] font-semibold">{{ name }}</h1>
    <p class="cursor-pointer" v-if="backB" @click="() => this.$router.go(-1)">Назад</p>
  </div>
</template>
<script>
export default {
  props: {
    backB: Boolean,
    name: String,
  },
};
</script>
