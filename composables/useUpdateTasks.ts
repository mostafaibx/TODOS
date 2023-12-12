import type { Task } from '~~/types'

export const useUpdateTasks = (emittedData: { payload: Task| string, source: string }, tasks: Task[]) => {
  const { payload, source } = emittedData

  if (source === 'taskAdded' && typeof payload === 'object') {
    const newTask = payload
    tasks.push(newTask)
    return tasks
  } else if (source === 'taskDeleted' && typeof payload === 'string') {
    const updatedTasks = tasks.filter(t => t.id !== undefined && t.id !== payload)
    return updatedTasks
  }
}
