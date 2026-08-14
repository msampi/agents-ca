import { Navigate, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useSession } from '@ui/hooks/useSession'

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { email, loading } = useSession()
  const location = useLocation()

  if (loading) {
    return <p>Loading session...</p>
  }

  if (!email) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
