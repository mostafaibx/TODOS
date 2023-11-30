<script setup>
const icons = [
  "&#127891;",
  "&#127944;",
  "&#127821;",
  "&#x1F5DD;",
  "&#x270F;",
  "&#127838;",
  "&#x1F575;",
  "&#128161;",
  "&#129516;",
  "&#128181;",
];
</script>

<template>
  <div class="icons-picker">
    <label for="icon">Icon: </label>
    <select class="icon" id="icon" name="icon">
      <option v-for="i in icons" :value="i" v-html="i"></option>
    </select>
  </div>
</template>

<style scoped>
.icons-picker {
  @apply p-2 w-40 flex justify-around items-center;
}
.icon {
  @apply text-4xl;
}
</style>
