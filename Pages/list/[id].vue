<script setup>
import MainHeader from "~~/Layout/MainHeader.vue";
import TodoList from "~~/Layout/TodoList.vue";
</script>

<template>
  <MainHeader />
  <div class="home-wrapper">
    <TodoList />
  </div>
</template>

<style scoped>
.home-wrapper {
  @apply flex flex-row h-screen justify-center items-center;
}
</style>
