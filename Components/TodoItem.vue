<script setup>
import DeleteBtn from "./DeleteBtn.vue";
</script>

<template>
  <li class="list-item">
    List 1
    <DeleteBtn />
  </li>
</template>

<style scoped>
.list-item {
  @apply flex justify-between items-center p-2  text-white text-2xl font-mono;
}
</style>
