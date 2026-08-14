export interface LoginFormValues {
  email: string
  password: string
}

interface LoginUiProps {
  email: string
  password: string
  loading: boolean
  error: string | null
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function LoginUi({
  email,
  password,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginUiProps) {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Team Board</h1>
        <p className="login-subtitle">Sign in to continue</p>

        <form className="login-form" onSubmit={onSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              autoComplete="email"
              disabled={loading}
              onChange={(event) => onEmailChange(event.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              disabled={loading}
              onChange={(event) => onPasswordChange(event.target.value)}
            />
          </label>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="login-hint">
          <p>Demo accounts:</p>
          <p>admin@teamboard.com / admin123</p>
          <p>demo@teamboard.com / demo123</p>
        </div>
      </section>
    </main>
  )
}
