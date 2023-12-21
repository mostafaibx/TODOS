<script setup>
import SignupForm from '~~/Components/SignupForm.vue'

definePageMeta({
  layout: 'logout-header',
  middleware: {
    unauthrizedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})
</script>

<template>
  <div class="signup">
    <SignupForm />
  </div>
</template>

<style scoped>
.signup {
  @apply flex flex-col justify-center items-center h-full w-full p-4 rounded-3xl shadow-2xl;
}

</style>
