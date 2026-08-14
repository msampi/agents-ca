import { useCallback, useEffect, useState } from 'react'
import { useAppContext } from '@ui/providers/AppProvider'

interface UseSessionState {
  email: string | null
  loading: boolean
  logout: () => Promise<void>
  refresh: () => Promise<void>
}

export function useSession(): UseSessionState {
  const { getSession, logout: logoutUseCase } = useAppContext()
  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    setLoading(true)

    try {
      const session = await getSession.execute()
      setEmail(session?.getEmail() ?? null)
    } finally {
      setLoading(false)
    }
  }, [getSession])

  useEffect(() => {
    void refresh()
  }, [refresh])

  const logout = useCallback(async () => {
    await logoutUseCase.execute()
    setEmail(null)
  }, [logoutUseCase])

  return { email, loading, logout, refresh }
}
