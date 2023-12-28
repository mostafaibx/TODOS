<script setup lang="ts">
import { useQueryClient, useMutation } from '@tanstack/vue-query'
import { Task } from '~~/types'

const queryClient = useQueryClient()

const errorMsg = ref('')
const titleRef = ref('')

const addTaskFn = async (task: Task) => {
  await useFetch('/api/task/', {
    method: 'POST',
    body: task
  })
}

const { mutate: addTaskMutation } = useMutation({
  mutationFn: addTaskFn,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['todoList'] })
  }
})

const addTaskHandler = () => {
  const task: Task = {
    title: titleRef.value,
    completed: false,
    listId: useRoute().params.id as string
  }
  if (titleRef.value === '') {
    errorMsg.value = 'Please Enter Task Name'
  } else {
    addTaskMutation(task)
    titleRef.value = ''
    errorMsg.value = ''
  }
}

</script>

<template>
  <form class="input-wrapper" @submit.prevent="addTaskHandler">
    <h1>{{ errorMsg }}</h1>
    >
    <input
      id="listName"
      v-model="titleRef"
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
