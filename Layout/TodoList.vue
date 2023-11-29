<script setup>
import TaskInput from "~~/Components/List/TaskInput.vue";
import TasksList from "~~/Components/List/TasksList.vue";

const addTask = ref(false);
const showInput = () => {
  addTask.value = true;
};
const closeInput = (e) => {
  if (e.currentTarget === e.target) {
    addTask.value = false;
  }
};
</script>

<template>
  <div class="todo-list" @click="closeInput">
    <h1 class="title">Your List Name</h1>
    <div class="tasks-wrapper">
      <TasksList />
      <button @click="showInput">> Create a new Task...</button>
      <TaskInput v-if="addTask" />
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  @apply flex flex-col w-8/12 h-5/6 overflow-y-scroll border-2 border-yellow-400 rounded-[6rem] rounded-tl-none shadow-2xl bg-green-500 relative;
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
