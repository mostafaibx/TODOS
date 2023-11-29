<script setup>
import TaskItem from "./TaskItem.vue";
</script>

<template>
  <ul class="items-wrapper">
    <TaskItem v-for="i in 5" :key="i" />
  </ul>
</template>

<style scoped>
.items-wrapper {
  @apply p-4 text-2xl w-full;
}
</style>
