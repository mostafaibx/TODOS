<script setup>
const props = defineProps({
  list: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="list-card" :style="'background-color: ' + props.list.color">
      <h1 class="icon" v-html="list.icon" />
      <h1 class="close">
        X
      </h1>
      <div class="list-content">
        <h1>{{ props.list.title }} ></h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  @apply flex flex-col-reverse w-32 h-32 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 border-2 border-yellow-400 hover:shadow-sm hover:scale-105 transition-all duration-200 rounded-3xl rounded-tl-none shadow-2xl  relative;
}
.list-content {
  @apply p-4 text-sm md:text-2xl lg:text-3xl font-mono ;
}
.icons-container {
  @apply flex justify-between items-center  bg-sky-400 rounded-3xl rounded-tl-none bg-opacity-30;
}
.icon {
  @apply w-32 h-32 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 absolute  text-8xl lg:text-8xl  opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200;
}
.close {
  @apply text-xl font-bold absolute top-0 right-0 px-4 py-1 m-2 opacity-25 hover:opacity-100 shadow-md bg-red-600 rounded-2xl;
}
</style>
