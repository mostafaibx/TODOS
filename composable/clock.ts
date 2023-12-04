const clock = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return { hours, minutes, seconds }
}

const hours = ref(clock().hours)
const minutes = ref(clock().minutes)
const sec = ref(clock().seconds)

const updateClock = () => {
  hours.value = clock().hours
  minutes.value = clock().minutes
  sec.value = clock().seconds
}
