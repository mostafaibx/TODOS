<script setup>
import LoginForm from '~~/Components/LoginForm.vue'

definePageMeta({
  layout: 'main-header'
})
</script>

<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<style scoped>
.login {
  @apply flex flex-col justify-center items-center h-full w-full p-4 rounded-3xl shadow-2xl;
}

</style>
