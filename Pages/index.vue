<script setup>

definePageMeta({
  layout: 'main-header',
  auth: false
})

const { status } = useAuth()
const isAuthenticated = computed(() => status.value === 'authenticated')
</script>

<template>
  <LazyWelcomeUserDashboardHeader v-if="isAuthenticated" />
  <ListsConatainer v-if="isAuthenticated" />
  <unAuthHomePage v-else />
</template>

<style scoped></style>
