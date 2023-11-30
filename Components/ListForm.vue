<script setup>
import ColorPicker from "./Form/ColorPicker.vue";
import IconsPicker from "./Form/IconsPicker.vue";

const addListHandler = async (e) => {
  if (e.target.listName.value.length < 1) {
    return;
  }
  if (e.target.color.value === "") {
    return;
  }
  const listData = {
    title: e.target.listName.value,
    color: e.target.color.value,
    icon: e.target.icon.value,
  };

  const res = await $fetch("/api/list/", {
    method: "POST",
    body: listData,
  });
};
</script>

<template>
  <div class="form-container">
    <form class="list-form" @submit.prevent="addListHandler">
      <div>
        <label for="listName">List Name:</label>
        <input type="text" id="listName" name="listName" />
      </div>

      <ColorPicker />
      <IconsPicker />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  @apply flex flex-col w-full h-60 text-slate-200 font-mono text-2xl bg-sky-400 bg-opacity-20 border-2 border-yellow-400 rounded-tl-none rounded-3xl hover:shadow-sm hover:scale-105 transition-all duration-200 shadow-2xl;
}
.list-form {
  @apply flex flex-col px-20 py-5 justify-center items-center;
}
</style>
