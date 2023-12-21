<script setup lang="ts">
const { status } = useAuth()

const isAuthenticated = computed(() => {
  return status.value === 'authenticated'
})

</script>

<template>
  <div>
    <div class="header">
      <div class="content">
        <div class="links">
          <NuxtLink to="/" class="icon">
            dashboard
          </NuxtLink>
          <NuxtLink to="/Insights" class="icon">
            Insights
          </NuxtLink>
          <NuxtLink v-if="!isAuthenticated" to="/Signup" class="icon">
            Signup
          </NuxtLink>
          <NuxtLink v-if="!isAuthenticated" to="/Login" class="icon">
            Login
          </NuxtLink>
          <NuxtLink v-if="isAuthenticated" to="/AboutPage">
            About
          </NuxtLink>
        </div>
      </div>
      <div class="user-info">
        <NuxtLink v-if="!isAuthenticated" to="/AboutPage">
          About
        </NuxtLink>
        <HeaderLoggedinTab v-if="isAuthenticated" />
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.header {
  @apply text-white h-12 w-full bg-slate-900 flex justify-between items-center p-4 shadow-2xl;
}
.links {
  @apply flex justify-between items-center;
}
.content {
  @apply flex justify-between items-center;
}
.icon {
  @apply mx-4 text-lg font-mono;
}
</style>
