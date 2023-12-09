<script setup lang="ts">
import useClock from '~~/utils/clock'

const { state, startClock, stopClock } = useClock()

onMounted(() => {
  startClock()
})

onUnmounted(() => {
  stopClock()
})

</script>

<template>
  <div class="clock">
    <div class="clock-side">
      <h1>{{ state.hours }}</h1>
    </div>
    <div class="clock-side">
      <h1>{{ state.minutes }}</h1>
    </div>
    <div class="clock-sec">
      <h1>{{ state.seconds }}</h1>
    </div>
    <h1 v-if="state.hours >= 5 && state.hours < 17" class="icon">
      &#x2600;
    </h1>
    <h1 v-else-if="state.hours >= 17 || state.hours < 5" class="icon">
      &#x1F31B;
    </h1>
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
