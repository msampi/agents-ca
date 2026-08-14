import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '@ui/hooks/useLogin'
import { useSession } from '@ui/hooks/useSession'
import { LoginUi } from './ui'

export function LoginPage() {
  const navigate = useNavigate()
  const { email, loading: sessionLoading } = useSession()
  const { loading, error, login } = useLogin()
  const [emailInput, setEmailInput] = useState('admin@teamboard.com')
  const [passwordInput, setPasswordInput] = useState('admin123')

  useEffect(() => {
    if (!sessionLoading && email) {
      navigate('/users', { replace: true })
    }
  }, [email, sessionLoading, navigate])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const success = await login({ email: emailInput, password: passwordInput })

    if (success) {
      navigate('/users', { replace: true })
    }
  }

  if (sessionLoading) {
    return <p>Loading session...</p>
  }

  return (
    <LoginUi
      email={emailInput}
      password={passwordInput}
      loading={loading}
      error={error}
      onEmailChange={setEmailInput}
      onPasswordChange={setPasswordInput}
      onSubmit={handleSubmit}
    />
  )
}
