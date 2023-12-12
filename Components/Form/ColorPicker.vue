<script setup lang="ts">
import { colors } from '~~/types'

// we can emit the color and use it as bg for form
</script>
<template>
  <div class="color-picker">
    <label for="color">Color:</label>
    <div>
      <input
        v-for="c in colors"
        id="color"
        :key="c"
        :value="c"
        class="color-option"
        type="radio"
        name="color"
        :style="{ backgroundColor: c as string}"
      >
    </div>
  </div>
</template>

<style scoped>
.color-picker {
  @apply h-10 p-2 flex justify-around items-center;
}
.color-picker div {
  @apply w-[350px];
}
.color-option {
  @apply mx-2 w-5 h-5 rounded-full appearance-none cursor-pointer hover:w-6 hover:h-6 hover:border-2 hover:border-slate-300 hover:shadow-sm hover:shadow-slate-500 checked:w-6 checked:h-6 checked:border-2 checked:border-slate-300 checked:shadow-sm checked:shadow-slate-500 transition-all duration-200;
}
</style>
