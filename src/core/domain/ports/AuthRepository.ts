import type { Session } from '../entities/Session'

export interface LoginInput {
  email: string
  password: string
}

export interface AuthRepository {
  authenticate(input: LoginInput): Promise<Session>
}
