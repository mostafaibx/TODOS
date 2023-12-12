import { reactive } from 'vue'

const useClock = () => {
  const state = reactive({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const updateClock = () => {
    const date = new Date()
    state.hours = date.getHours()
    state.minutes = date.getMinutes()
    state.seconds = date.getSeconds()
  }

  let intervalId

  const startClock = () => {
    updateClock()
    intervalId = setInterval(updateClock, 1000)
  }

  const stopClock = () => {
    clearInterval(intervalId)
  }

  return { state, startClock, stopClock }
}

export default useClock
