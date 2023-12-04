<script setup>
import TaskInput from '~~/Components/List/TaskInput.vue'
import TasksList from '~~/Components/List/TasksList.vue'

const addTask = ref(false)

const showInput = () => {
  addTask.value = true
}
const closeInput = (e) => {
  if (e.currentTarget === e.target) {
    addTask.value = false
  }
}

const { data: list } = await useFetch(`/api/list/${useRoute().params.id}`)

const updateTaskList = (payload) => {
  if (payload.source === 'taskDeleted') {
    list.value.tasks = list.value.tasks.filter(t => t.id !== payload.taskId)
  } else {
    list.value.tasks.push(payload)
  }
}

</script>

<template>
  <div
    class="todo-list"
    :style="'background-color: ' + list.color"
    @click="closeInput"
  >
    <h1 class="title">
      {{ list.title }}
    </h1>
    <div class="tasks-wrapper">
      <TasksList :tasks="list.tasks" @task-deleted="updateTaskList" />
      <button @click="showInput">
        > Create a new Task...
      </button>
      <TaskInput v-if="addTask" @task-added="updateTaskList" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  @apply flex flex-col w-8/12 h-5/6 overflow-y-scroll border-2 border-yellow-400 rounded-[6rem] rounded-tl-none shadow-2xl  relative;
}
.todo-list::-webkit-scrollbar {
  display: none;
}
.title {
  @apply text-white text-3xl font-mono p-4;
}
.tasks-wrapper {
  @apply p-4 pt-2 pb-10 text-2xl font-mono  font-semibold;
}
</style>
