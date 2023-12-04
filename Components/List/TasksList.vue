<script setup>
import TaskItem from "./TaskItem.vue";

defineProps({
  tasks: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="items-wrapper">
    <TaskItem
      v-for="t in tasks"
      :key="t"
      :task="t"
      @task-deleted="$emit('taskDeleted', $event)"
    />
  </ul>
</template>

<style scoped>
.items-wrapper {
  @apply p-4 text-2xl w-full;
}
</style>
