<template>
  <div class="input-wrapper">
    > <input class="input-task" type="text" placeholder="Enter Task Name" />
    <button>Add Task</button>
  </div>
</template>

<style scoped>
.input-task {
  @apply w-9/12 text-white p-2 bg-transparent  hover:border-b-2 focus:border-b-2 focus:outline-none;
}
.input-wrapper {
  @apply flex justify-between items-center;
}
</style>
