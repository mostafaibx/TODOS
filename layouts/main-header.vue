
<template>
  <div>
    <div class="header">
      <div class="links">
        <NuxtLink to="/" class="icon">
          dashboard
        </NuxtLink>
        <NuxtLink to="/Insights" class="icon">
          Insights
        </NuxtLink>
        <NuxtLink to="/Signup" class="icon">
          Signup
        </NuxtLink>
        <NuxtLink to="/Login" class="icon">
          Login
        </NuxtLink>
      </div>
      <NuxtLink to="/AboutPage">
        About
      </NuxtLink>
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
.icon {
  @apply mx-4 text-lg font-mono;
}
</style>
