import type { SessionRepository } from '../domain/ports/SessionRepository'

export class Logout {
  private readonly sessionRepository: SessionRepository

  constructor(sessionRepository: SessionRepository) {
    this.sessionRepository = sessionRepository
  }

  async execute(): Promise<void> {
    await this.sessionRepository.clear()
  }
}
