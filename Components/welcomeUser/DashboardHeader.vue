<script setup>
import ClockComp from './ClockComp.vue'

</script>

<template>
  <div class="dashboard-header">
    <h1 class="msg">
      Hello! UserName
    </h1>
    <ClockComp />
  </div>
</template>

<style scoped>
.dashboard-header {
  @apply flex justify-around items-center p-4 text-slate-100;
}
.msg {
  @apply text-6xl font-mono;
}
</style>
