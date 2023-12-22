<script setup>
import ClockComp from './ClockComp.vue'

const { data } = useAuth()
</script>

<template>
  <div class="dashboard-header">
    <h1 class="msg">
      Hello! {{ data?.user?.name }}
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
