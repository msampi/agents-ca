import { Session } from '../../domain/entities/Session'
import type { SessionRepository } from '../../domain/ports/SessionRepository'

interface StoredSession {
  token: string
  userId: number
  email: string
}

const SESSION_STORAGE_KEY = 'teamboard_session'

export class LocalStorageSessionRepository implements SessionRepository {
  async save(session: Session): Promise<void> {
    const stored: StoredSession = {
      token: session.getToken(),
      userId: session.getUserId(),
      email: session.getEmail(),
    }

    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(stored))
  }

  async get(): Promise<Session | null> {
    const raw = localStorage.getItem(SESSION_STORAGE_KEY)

    if (!raw) {
      return null
    }

    const stored = JSON.parse(raw) as StoredSession

    return new Session(stored.token, stored.userId, stored.email)
  }

  async clear(): Promise<void> {
    localStorage.removeItem(SESSION_STORAGE_KEY)
  }
}
