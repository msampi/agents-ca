export class Session {
  private readonly token: string
  private readonly userId: number
  private readonly email: string

  constructor(token: string, userId: number, email: string) {
    this.token = token
    this.userId = userId
    this.email = email
  }

  getToken(): string {
    return this.token
  }

  getUserId(): number {
    return this.userId
  }

  getEmail(): string {
    return this.email
  }
}
