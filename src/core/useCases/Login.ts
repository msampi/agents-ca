import { Validator } from '../domain/validators/Validator'
import type { AuthRepository } from '../domain/ports/AuthRepository'
import type { SessionRepository } from '../domain/ports/SessionRepository'
import type { LoginInput } from '../domain/ports/AuthRepository'
import type { Session } from '../domain/entities/Session'

export class ValidationError extends Error {
  private readonly validationErrors: string[]

  constructor(validationErrors: string[]) {
    super(validationErrors.join(', '))
    this.name = 'ValidationError'
    this.validationErrors = validationErrors
  }

  getErrors(): string[] {
    return this.validationErrors
  }
}

export class Login {
  private readonly authRepository: AuthRepository
  private readonly sessionRepository: SessionRepository

  constructor(
    authRepository: AuthRepository,
    sessionRepository: SessionRepository,
  ) {
    this.authRepository = authRepository
    this.sessionRepository = sessionRepository
  }

  async execute(input: LoginInput): Promise<Session> {
    const errors = [
      Validator.required(input.email, 'Email'),
      Validator.required(input.password, 'Password'),
      Validator.email(input.email, 'Email'),
    ].filter((error): error is string => error !== null)

    if (errors.length > 0) {
      throw new ValidationError(errors)
    }

    const session = await this.authRepository.authenticate(input)
    await this.sessionRepository.save(session)

    return session
  }
}
