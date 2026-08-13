export class User {
  private readonly id: number
  private readonly name: string
  private readonly username: string
  private readonly email: string
  private readonly companyName: string

  constructor(
    id: number,
    name: string,
    username: string,
    email: string,
    companyName: string,
  ) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.companyName = companyName
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  getUsername(): string {
    return this.username
  }

  getEmail(): string {
    return this.email
  }

  getCompanyName(): string {
    return this.companyName
  }
}
