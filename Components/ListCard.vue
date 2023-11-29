<script setup>
const colors = [
  "emerald-600",
  "green-500",
  "sky-700",
  "amber-400",
  "lime-600",
  "violet-800",
  "fuchsia-700",
  "rose-600",
  "indigo-700",
];
</script>

<template>
  <div>
    <div class="list-card">
      <h1 class="icon">&#129351;</h1>
      <div class="list-content">
        <h1>Title ></h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  @apply flex flex-col-reverse w-60 h-60  border-2 border-yellow-400 hover:shadow-sm hover:scale-105 transition-all duration-200 rounded-3xl rounded-tl-none shadow-2xl bg-indigo-700 relative;
}
.list-content {
  @apply p-4 text-3xl font-mono z-50;
}
.icon {
  @apply text-9xl absolute top-0 left-[-30px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200;
}
</style>
