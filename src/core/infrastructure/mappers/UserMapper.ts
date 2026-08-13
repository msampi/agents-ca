import { User } from '../../domain/entities/User'

export interface UserApiResponse {
  id: number
  name: string
  username: string
  email: string
  company: {
    name: string
  }
}

export class UserMapper {
  static toDomain(data: UserApiResponse): User {
    return new User(
      data.id,
      data.name,
      data.username,
      data.email,
      data.company.name,
    )
  }

  static toDomainList(data: UserApiResponse[]): User[] {
    return data.map(UserMapper.toDomain)
  }
}
