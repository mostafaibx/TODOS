<script setup></script>

<template>
  <div class="header">
    <div class="links">
      <h1 class="icon">dashboard</h1>
      <h1 class="icon">Insights</h1>
    </div>
    <NuxtLink to="/AboutPage">About</NuxtLink>
  </div>
</template>

<style scoped>
.header {
  @apply text-white h-12 w-full bg-slate-900 flex justify-between items-center p-4 shadow-2xl;
}
.links {
  @apply flex justify-between items-center;
}
.icon {
  @apply mx-4 text-lg font-mono;
}
</style>
