import type { UserRepository } from '../domain/ports/UserRepository'
import type { User } from '../domain/entities/User'

export class GetUsers {
  private readonly userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(): Promise<User[]> {
    return this.userRepository.getAll()
  }
}
