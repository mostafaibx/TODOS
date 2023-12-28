<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi'
import { useQueryClient, useMutation } from '@tanstack/vue-query'
import { Task } from '~~/types'

const queryClient = useQueryClient()

const props = defineProps({
  task: {
    type: Object as PropType<Task>,
    default: () => {}
  }
})

const completed = computed(() => {
  return props.task.completed
})

const statusChangeFn = async ({ completed, taskId }: { completed: boolean, taskId: string }) => {
  await useFetch(`/api/task/${taskId}`, {
    method: 'PUT',
    body: { completed: !completed }
  })
}

const { mutate: taskStatuMutation } = useMutation({
  mutationFn: statusChangeFn,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todoList'] })
  }
})

const deleteTaskFn = async (taskId: string) => {
  await useFetch(`/api/task/${taskId}`, {
    method: 'DELETE'
  })
}

const { mutate: deleteTaskMutation } = useMutation({
  mutationFn: deleteTaskFn,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todoList'] })
  }
})

</script>

<template>
  <li class="todo-item">
    <p :class="{ done: completed, undone: !completed }">
      > {{ task.title }}
    </p>
    <div class="action">
      <h1 @click="() => taskStatuMutation({completed: completed, taskId: props.task.id!})">
        {{ !completed ? "Done" : "Undone" }}
      </h1>
      <h1 class="delete" @click="() => deleteTaskMutation(props.task.id!)">
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
