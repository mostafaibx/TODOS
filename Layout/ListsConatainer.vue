<script setup>
import CreateListcard from "~~/Components/CreateListcard.vue";
import ListCard from "~~/Components/ListCard.vue";
import ListForm from "~~/Components/ListForm.vue";
</script>

<template>
  <div class="lists-container">
    <div class="lists">
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <CreateListcard />
      <ListForm class="add-list" />
    </div>
  </div>
</template>

<style scoped>
.lists-container {
  @apply w-screen flex justify-center items-center;
}
.lists {
  @apply grid grid-cols-3 m-10 w-7/12 gap-4;
}

.add-list {
  @apply col-span-3;
}
</style>
