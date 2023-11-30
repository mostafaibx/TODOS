<script setup>
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="list-card" :style="'background-color: ' + props.list.color">
      <h1 class="icon" v-html="list.icon"></h1>
      <div class="list-content">
        <h1>{{ props.list.title }} ></h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  @apply flex flex-col-reverse w-60 h-60  border-2 border-yellow-400 hover:shadow-sm hover:scale-105 transition-all duration-200 rounded-3xl rounded-tl-none shadow-2xl  relative;
}
.list-content {
  @apply p-4 text-3xl font-mono z-50;
}
.icon {
  @apply text-9xl absolute top-0 left-[-25px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200;
}
</style>
