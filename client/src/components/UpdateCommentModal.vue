<template>
  <div
    v-show="isActive"
    class="bg-[rgba(0,0,0,0.2)] absolute top-0 left-0 w-[100%] h-[100%] flex items-center">
    <div class="bg-mainBlockBlue min-h-[400px] max-w-[900px] mx-auto p-10">
      <div class="flex justify-between items-end text-mainOrange">
        <h1 class="text-[24px] font-semibold">Редактирование комментария</h1>
      </div>
      <div class="pt-[30px] space-x-2 text-mainWhite">
        <input
          class="px-[10px] min-w-[665px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray"
          type="text"
          placeholder="Комментарий" />

        <button
          class="min-w-[130px] min-h-[50px] bg-mainBlockBlue border-[2px] border-mainStrokeGray">
          Исправить
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
