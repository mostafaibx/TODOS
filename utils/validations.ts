import { List, Task, User } from '~~/types'

export const validateList = (list: List): string | undefined => {
  if (list.title.trim() === '') {
    return 'List name cannot be empty'
  }
  if (!list.color) {
    return 'List color cannot be empty'
  }
}

export const validateTask = (task: Task): string | undefined => {
  if (task.title.trim() === '') {
    return 'Task name is required'
  }
  if (task.listId === '') {
    return 'List is required'
  }
}

export const validateUserSignup = (user: {username: string, email: string, password: string, confirmPassword: string}): string | undefined => {
  const { username, email, password, confirmPassword } = user

  const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
  const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    return 'Please fill in all fields'
  }
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address'
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters long'
  }

  if (!passwordRegex.test(password)) {
    return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  }

  if (password.value !== confirmPassword.value) {
    return 'Passwords do not match'
  }
}
