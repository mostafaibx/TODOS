<script setup lang='ts'>
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMsg = ref('')

const signupHandler = async () => {
  const userData = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  }

  const result = await useSignup(userData)
  if (result?.error) {
    errorMsg.value = result.error
  }
  username.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}

</script>

<template>
  <form class="signup-form" @submit.prevent="signupHandler">
    <h1>Signup...</h1>
    <p v-if="errorMsg" class="error">
      {{ errorMsg }}
    </p>
    <label for="username">Username</label>
    <input id="username" v-model="username" name="username" type="text">
    <label for="email">Email</label>
    <input id="email" v-model="email" name="email" type="email">
    <label for="password">Password</label>
    <input id="password" v-model="password" name="password" type="password">
    <label for="confirmPassword">Confirm Password</label>
    <input id="confirmPassword" v-model="confirmPassword" name="confirmPassword" type="password">
    <button type="submit">
      Signup
    </button>
    <div class="links">
      <p>Already have an account?</p>
      <NuxtLink to="/Login">
        Login
      </NuxtLink>
    </div>
  </form>
</template>

<style scoped>

h1 {
  @apply text-3xl text-white font-mono mb-5;
}
.signup-form {
  @apply flex flex-col justify-center items-center p-4 w-7/12 rounded-3xl shadow-2xl bg-slate-500;
}
.signup-form label {
  @apply text-xl text-white font-mono;
}

.signup-form input {
  @apply w-60 p-2 m-2 font-mono rounded-lg shadow-2xl hover:ring-2 hover:ring-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-separate focus:border-2;
}

.signup-form button {
  @apply w-60 p-2 m-2 rounded-lg hover:bg-slate-500 bg-slate-600 drop-shadow-2xl text-white hover:text-slate-800 font-mono text-xl;
}

.links {
  @apply flex justify-center items-center;
}

.error{
  @apply text-red-500 text-center text-xl font-mono mb-2;
}
</style>
~~/composables/useSignup
