
export const useLogin = async (email:string, password:string) => {
  const validationError = validateUserLogin(email, password)
  if (validationError) {
    return { error: validationError, data: null }
  }

  const { data, error } = await useFetch('/api/auth/login/', {
    method: 'POST',
    body: { email, password }
  })
  if (error) {
    return { error: error.value?.message, data: null }
  }

  navigateTo('/')
  // it should return token if success after implemnting auth | jwt
  return { error: null, data }
}
