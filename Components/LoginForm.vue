<script setup lang='ts'>

const email = ref('')
const password = ref('')
const errorMsg = ref('')

const { signIn, signOut, status, data } = useAuth()
const loginHandler = async () => {
  await signIn('credentials', { email: email.value, password: password.value })
}
const testLogin = async () => {
  await signIn('github', { redirect: false })
}

// eslint-disable-next-line no-console
console.log(data.value)

</script>

<template>
  <form class="login-form" @submit.prevent="loginHandler">
    <h1>Login...</h1>
    <p v-if="errorMsg" class="error">
      {{ errorMsg }}
    </p>
    <label for="email">Email</label>
    <input id="email" v-model="email" name="email" type="email">
    <label for="password">Password</label>
    <input id="password" v-model="password" name="password" type="password">
    <p> {{ computed(()=> status==='authenticated' ? 'Authenticated' : 'unauthenticated') }}</p>
    <button type="submit">
      Login
    </button>
    <GithubLogin @click="testLogin" />
    <button @click="testLogout">
      TEST LOGOUT
    </button>
  </form>
</template>

<style scoped>

h1 {
  @apply text-3xl text-white font-mono mb-5;
}
.login-form {
  @apply flex flex-col justify-center items-center p-4 w-7/12 rounded-3xl shadow-2xl bg-slate-500;
}
.login-form label {
  @apply text-xl text-white font-mono;
}

.login-form input {
  @apply w-60 p-2 m-2 font-mono rounded-lg shadow-2xl hover:ring-2 hover:ring-slate-800 focus:ring-2 focus:ring-slate-800 focus:border-separate focus:border-2;
}

.login-form button {
  @apply w-60 p-2 m-2 rounded-lg hover:bg-slate-500 bg-slate-600 drop-shadow-2xl text-white hover:text-slate-800 font-mono text-xl;
}

.error{
  @apply text-red-500 text-center text-xl font-mono mb-2;
}
</style>
~~/composables/useLogin
