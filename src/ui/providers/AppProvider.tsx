import { createContext, useContext, type ReactNode } from 'react'
import { container, type Container } from '@composition/container'

const AppContext = createContext<Container | null>(null)

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return <AppContext.Provider value={container}>{children}</AppContext.Provider>
}

export function useAppContext(): Container {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
