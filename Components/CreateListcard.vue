<script setup></script>

<template>
  <div>
    <div class="list-card">
      <h1 class="icon">
        &#128511;
      </h1>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  @apply flex flex-col-reverse w-60 h-60  border-2 border-yellow-400 hover:shadow-sm hover:scale-105 transition-all duration-200 rounded-3xl rounded-tl-none shadow-2xl relative;
}
.list-card::after {
  @apply content-['+'] flex justify-center items-center text-9xl font-mono font-extrabold absolute top-0 left-0 w-full h-full bg-sky-400 rounded-3xl rounded-tl-none bg-opacity-30;
}
.icon {
  @apply text-9xl absolute top-0 left-[-30px] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200;
}
</style>
