<script setup lang="ts">
import { Task } from '~~/types'

const emit = defineEmits(['taskAdded'])

const errorMsg = ref('')
const addTaskHandler = async (e) => {
  const task: Task = {
    title: e.target.listName.value,
    completed: false,
    listId: useRoute().params.id as string
  }

  const result = useAddTask(task)
  if (result?.error) {
    errorMsg.value = result.error
  }
  emit('taskAdded', { payload: task, source: 'taskAdded' })
}
</script>

<template>
  <form class="input-wrapper" @submit.prevent="addTaskHandler">
    <h1>{{ errorMsg }}</h1>
    >
    <input
      id="listName"
      class="input-task"
      type="text"
      placeholder="Enter Task Name"
    >
    <button>Add Task</button>
  </form>
</template>

<style scoped>
.input-task {
  @apply w-9/12 text-white p-2 bg-transparent  hover:border-b-2 focus:border-b-2 focus:outline-none;
}
.input-wrapper {
  @apply flex justify-between items-center;
}
</style>
