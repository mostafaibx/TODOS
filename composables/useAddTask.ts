import { Task } from '~~/types'

export const useAddTask = async (task: Task) => {
  const validationError = validateTask(task)

  if (validationError) {
    return { error: validationError, data: null }
  }

  const { error, data } = await useFetch('/api/task/', {
    method: 'POST',
    body: task
  })
  if (error.value) {
    return { error: error.value?.message, data: null }
  }
  return { error: null, data }
}
