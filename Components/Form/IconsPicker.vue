<script setup>
import { icons } from '~~/types'
</script>

<template>
  <div class="icons-picker">
    <label for="icon">Icon: </label>
    <select id="icon" class="icon" name="icon">
      <option v-for="i in icons" :key="i" :value="i" v-html="i" />
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
