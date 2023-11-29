<script setup></script>
<template>
  <input class="color-option" type="radio" name="listOptions" value="option1" />
</template>

<style scoped>
.color-option {
  @apply mx-2 w-5 h-5 bg-red-700 rounded-full appearance-none cursor-pointer hover:w-6 hover:h-6 hover:border-2 hover:border-slate-300 hover:shadow-sm hover:shadow-slate-500 checked:w-6 checked:h-6 checked:border-2 checked:border-slate-300 checked:shadow-sm checked:shadow-slate-500 transition-all duration-200;
}
</style>
