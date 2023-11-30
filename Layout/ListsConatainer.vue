<script setup>
import CreateListcard from "~~/Components/CreateListcard.vue";
import ListCard from "~~/Components/ListCard.vue";
import ListForm from "~~/Components/ListForm.vue";

const { data } = await useFetch("/api/list/");
const lists = JSON.parse(data.value.body);

const selectListHandler = (e) => {
  navigateTo(`/list/${e}`);
};
</script>

<template>
  <div class="lists-container">
    <div class="lists">
      <ListCard
        v-for="list in lists"
        :key="list.id"
        :list="list"
        @click="selectListHandler(list.id)"
      />
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
