import { useNavigate } from 'react-router-dom'
import { useUsers } from '@ui/hooks/useUsers'
import { useSession } from '@ui/hooks/useSession'
import { UsersUi } from './ui'

export function UsersPage() {
  const navigate = useNavigate()
  const { email, logout } = useSession()
  const { users, loading, error } = useUsers()

  async function handleLogout() {
    await logout()
    navigate('/login', { replace: true })
  }

  if (loading) {
    return <p>Loading users...</p>
  }

  if (error) {
    return <p role="alert">Error: {error}</p>
  }

  return (
    <main>
      <header className="page-header">
        <div>
          <h1>Users</h1>
          {email && <p className="page-subtitle">Signed in as {email}</p>}
        </div>
        <button type="button" className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </header>
      <UsersUi users={users} />
    </main>
  )
}
