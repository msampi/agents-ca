import { useEffect, useState } from 'react'
import type { User } from '@core/domain/entities/User'
import { useAppContext } from '@ui/providers/AppProvider'
import type { UserListItem } from '@ui/pages/UsersPage/ui'

interface UsersState {
  users: UserListItem[]
  loading: boolean
  error: string | null
}

function mapUserToListItem(user: User): UserListItem {
  return {
    id: user.getId(),
    name: user.getName(),
    username: user.getUsername(),
    email: user.getEmail(),
    companyName: user.getCompanyName(),
  }
}

export function useUsers(): UsersState {
  const { getUsers } = useAppContext()
  const [users, setUsers] = useState<UserListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getUsers
      .execute()
      .then((data) => setUsers(data.map(mapUserToListItem)))
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : 'Unknown error')
      })
      .finally(() => setLoading(false))
  }, [getUsers])

  return { users, loading, error }
}
