<script setup lang="ts">
const { signOut, data } = useAuth()
const logoutHandler = async () => {
  await signOut()
}
</script>

<template>
  <div class="user-tab">
    <img :src="data?.user?.image">
    <h1>{{ data?.user?.name }}</h1>
    <h1 @click="logoutHandler">
      logout
    </h1>
  </div>
</template>

<style scoped>
.user-tab {
    @apply flex items-center justify-between h-10 bg-slate-300 rounded-full p-2 text-black font-mono;
}
.user-tab img {
    @apply w-8 h-8 rounded-full;
}
.user-tab h1 {
    @apply cursor-pointer px-2;
}
</style>
