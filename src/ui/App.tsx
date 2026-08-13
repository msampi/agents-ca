import { AppProvider } from '@ui/providers/AppProvider'
import { UsersPage } from '@ui/pages/UsersPage'
import './App.css'

export function App() {
  return (
    <AppProvider>
      <UsersPage />
    </AppProvider>
  )
}
