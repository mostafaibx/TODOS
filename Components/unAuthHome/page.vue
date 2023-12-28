
<template>
  <div class="content">
    <div class="welcome">
      <h1>Welcome to TODOS !</h1>
      <WelcomeUserClockComp />
    </div>
    <p class="my-24">
      Now you can organize your tasks in lists and track your progress &#x1F680;
    </p>
    <p>Please login to be able to use the app</p>
    <div class="buttons">
      <NuxtLink to="/signup">
        <button>Signup</button>
      </NuxtLink>
      <NuxtLink to="/login">
        <button>Login</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.content {
    @apply flex flex-col justify-center items-center text-white text-2xl font-mono p-4 m-4
}
.welcome {
    @apply flex justify-between items-center px-16 w-full
}
.content h1{
    @apply font-bold text-3xl
}
.buttons {
    @apply flex justify-center items-center p-4 w-6/12 h-24
}
.buttons button{
    @apply bg-slate-600 hover:bg-slate-800 p-4 px-6 m-2 rounded-lg
}
</style>
