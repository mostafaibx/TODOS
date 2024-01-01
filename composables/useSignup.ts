import { UserSignupData } from '~~/types'

export const useSignup = async (userData:UserSignupData) => {
  const validationError = validateUserSignup(userData)

  if (validationError) {
    return { error: validationError }
  }

  const { error } = await useFetch('/api/auth/register/', {
    method: 'POST',
    body: userData
  })
  if (error) {
    return { error: error.value?.message, data: null }
  } else {
    navigateTo('/login')
    return { error: null }
  }
}
