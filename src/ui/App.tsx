import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider } from '@ui/providers/AppProvider'
import { ProtectedRoute } from '@ui/components/ProtectedRoute'
import { LoginPage } from '@ui/pages/LoginPage'
import { UsersPage } from '@ui/pages/UsersPage'
import './App.css'

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}
