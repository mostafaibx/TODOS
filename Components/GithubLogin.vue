
<template>
  <div class="container">
    <img src="https://github.com/fluidicon.png" alt="GitHub">
    <p>Sign in with GitHub</p>
  </div>
</template>

<style scoped>
.container {
@apply flex justify-around w-5/12 h-10 items-center p-2 bg-slate-800 rounded-lg hover:bg-slate-600 hover:scale-105 transition-all duration-200;
}
.container p {
  @apply text-white font-mono;
}
.container img {
  @apply w-8 h-8;
}
</style>
