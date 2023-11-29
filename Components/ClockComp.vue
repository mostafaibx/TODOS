<script setup>
const clock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hours, minutes, seconds };
};

const hours = ref(clock().hours);
const minutes = ref(clock().minutes);
const sec = ref(clock().seconds);

const updateClock = () => {
  hours.value = clock().hours;
  minutes.value = clock().minutes;
  sec.value = clock().seconds;
};

// Set interval and save the interval ID
const intervalId = setInterval(updateClock, 1000);

// Clear the interval when the component is about to be destroyed
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="clock">
    <div class="clock-side">
      <h1>{{ hours }}</h1>
    </div>
    <div class="clock-side">
      <h1>{{ minutes }}</h1>
    </div>
    <div class="clock-sec">
      <h1>{{ sec }}</h1>
    </div>
    <h1 v-if="hours >= 5 && hours < 17" class="icon">&#x2600;</h1>
    <h1 v-else-if="hours >= 17 || hours < 5" class="icon">&#x1F31B;</h1>
  </div>
</template>

<style scoped>
.clock {
  @apply flex justify-center items-center;
}
.clock-side {
  /*   background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 5px,
    #465298 5px,
    #465298 10px
  ); */
  @apply mx-0.5 bg-slate-600 rounded-3xl h-40 w-40 flex justify-center items-center text-8xl font-mono relative;
}

.clock-side::after {
  @apply content-[''] w-40 h-20 bg-slate-200 rounded-t-3xl opacity-50 z-10 absolute top-0 left-0;
}
.clock-sec {
  @apply mx-0.5 bg-slate-600 rounded-lg h-10 w-10 flex justify-center items-center text-2xl font-mono relative;
}
.icon {
  @apply text-9xl;
}
</style>
