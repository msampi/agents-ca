import type { UserRepository } from '../../domain/ports/UserRepository'
import type { User } from '../../domain/entities/User'
import type { HttpClientInterface } from '../http/HttpClientInterface'
import { UserMapper, type UserApiResponse } from '../mappers/UserMapper'

export class HttpUserRepository implements UserRepository {
  private readonly httpClient: HttpClientInterface

  constructor(httpClient: HttpClientInterface) {
    this.httpClient = httpClient
  }

  async getAll(): Promise<User[]> {
    const data = await this.httpClient.get<UserApiResponse[]>('/users')
    return UserMapper.toDomainList(data)
  }
}
