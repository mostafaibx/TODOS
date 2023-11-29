<script setup>
const taskStatu = ref(true);

const taskStatuHandler = () => {
  taskStatu.value = !taskStatu.value;
};
</script>

<template>
  <li class="todo-item">
    <p :class="{ done: !taskStatu, undone: taskStatu }">> Task 1</p>
    <div class="action">
      <h1 @click="taskStatuHandler">{{ taskStatu ? "Done" : "Undone" }}</h1>
      <h1 class="delete">Delete</h1>
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
