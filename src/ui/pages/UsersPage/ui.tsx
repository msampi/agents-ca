export interface UserListItem {
  id: number
  name: string
  username: string
  email: string
  companyName: string
}

interface UsersUiProps {
  users: UserListItem[]
}

export function UsersUi({ users }: UsersUiProps) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.companyName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
