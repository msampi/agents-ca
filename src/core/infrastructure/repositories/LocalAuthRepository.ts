import { Session } from '../../domain/entities/Session'
import { InvalidCredentialsError } from '../../domain/errors/InvalidCredentialsError'
import type { AuthRepository, LoginInput } from '../../domain/ports/AuthRepository'

interface LocalCredential {
  email: string
  password: string
  userId: number
}

const LOCAL_CREDENTIALS: LocalCredential[] = [
  { email: 'admin@teamboard.com', password: 'admin123', userId: 1 },
  { email: 'demo@teamboard.com', password: 'demo123', userId: 2 },
]

export class LocalAuthRepository implements AuthRepository {
  async authenticate(input: LoginInput): Promise<Session> {
    const credential = LOCAL_CREDENTIALS.find(
      (entry) => entry.email === input.email && entry.password === input.password,
    )

    if (!credential) {
      throw new InvalidCredentialsError()
    }

    const token = crypto.randomUUID()

    return new Session(token, credential.userId, credential.email)
  }
}
