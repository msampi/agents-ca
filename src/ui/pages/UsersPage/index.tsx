import { useUsers } from '@ui/hooks/useUsers'
import { UsersUi } from './ui'

export function UsersPage() {
  const { users, loading, error } = useUsers()

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p role="alert">Error: {error}</p>
  }

  return (
    <main>
      <h1>Users</h1>
      <UsersUi users={users} />
    </main>
  )
}
