<script setup>
definePageMeta({
  layout: 'main-header'
})

</script>

<template>
  <div class="home-wrapper">
    <TodoList />
  </div>
</template>

<style scoped>
.home-wrapper {
  @apply flex flex-row h-screen justify-center items-center;
}
</style>
