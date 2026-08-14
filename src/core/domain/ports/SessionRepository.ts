import type { Session } from '../entities/Session'

export interface SessionRepository {
  save(session: Session): Promise<void>
  get(): Promise<Session | null>
  clear(): Promise<void>
}
