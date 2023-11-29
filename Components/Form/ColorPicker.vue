<script setup>
import ColorInput from "./ColorInput.vue";
</script>
<template>
  <div class="color-picker">
    <label for="">Color:</label>
    <div>
      <ColorInput v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<style scoped>
.color-picker {
  @apply h-10 p-2 flex justify-around items-center;
}
.color-picker div {
  @apply w-[190px];
}
</style>
