import { useCallback, useState } from 'react'
import { InvalidCredentialsError } from '@core/domain/errors/InvalidCredentialsError'
import { ValidationError } from '@core/useCases/Login'
import { useAppContext } from '@ui/providers/AppProvider'

interface LoginFormValues {
  email: string
  password: string
}

interface UseLoginState {
  loading: boolean
  error: string | null
  login: (values: LoginFormValues) => Promise<boolean>
}

export function useLogin(): UseLoginState {
  const { login: loginUseCase } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(
    async (values: LoginFormValues): Promise<boolean> => {
      setLoading(true)
      setError(null)

      try {
        await loginUseCase.execute(values)
        return true
      } catch (err: unknown) {
        if (err instanceof ValidationError) {
          setError(err.getErrors().join(', '))
        } else if (err instanceof InvalidCredentialsError) {
          setError(err.message)
        } else if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Unknown error')
        }

        return false
      } finally {
        setLoading(false)
      }
    },
    [loginUseCase],
  )

  return { loading, error, login }
}
