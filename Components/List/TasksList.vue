<script setup lang='ts'>
import { PropType } from 'nuxt/dist/app/compat/capi'
import TaskItem from './TaskItem.vue'
import { Task } from '~~/types'
defineEmits(['taskDeleted'])
defineProps({
  tasks: {
    type: Array as PropType<Task[]>,
    default: () => []
  }
})
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
