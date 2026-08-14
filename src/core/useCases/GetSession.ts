import type { SessionRepository } from '../domain/ports/SessionRepository'
import type { Session } from '../domain/entities/Session'

export class GetSession {
  private readonly sessionRepository: SessionRepository

  constructor(sessionRepository: SessionRepository) {
    this.sessionRepository = sessionRepository
  }

  async execute(): Promise<Session | null> {
    return this.sessionRepository.get()
  }
}
