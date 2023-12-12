<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi'
import { Task } from '~~/types'

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    default: () => {}
  }
})

const emit = defineEmits(['taskDeleted'])
const completed = ref(props.task.completed)

// handle error
const taskStatuHandler = async () => {
  completed.value = !completed.value
  await useFetch(`/api/task/${props.task.id}`, {
    method: 'PUT',
    body: { completed: completed.value }
  })
}

const deleteTaskHandler = async () => {
  const taskId = props.task.id
  await useFetch(`/api/task/${props.task.id}`, {
    method: 'DELETE'
  })
  emit('taskDeleted', { payload: taskId, source: 'taskDeleted' })
}
</script>

<template>
  <li class="todo-item">
    <p :class="{ done: !completed, undone: completed }">
      > {{ task.title }}
    </p>
    <div class="action">
      <h1 @click="taskStatuHandler">
        {{ completed ? "Done" : "Undone" }}
      </h1>
      <h1 class="delete" @click="deleteTaskHandler">
        Delete
      </h1>
    </div>
  </li>
</template>

<style scoped>
.todo-item {
  @apply flex justify-between items-center px-20 py-2  text-white text-2xl font-mono;
}
.done {
  @apply line-through;
}
.action {
  @apply flex;
}
.action h1 {
  @apply mx-4 cursor-pointer hover:font-bold hover:scale-105 transition-all duration-100;
}

.delete {
  @apply text-red-500;
}
</style>
