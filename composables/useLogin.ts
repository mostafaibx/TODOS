
export const useLogin = async (email:string, password:string, signIn:any) => {
  const validationError = validateUserLogin(email, password)
  if (validationError) {
    return { error: validationError }
  }

  await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })

  navigateTo('/')
  // it should return token if success after implemnting auth | jwt
  return { error: null }
}
