import { HttpClient } from '@core/infrastructure/http/HttpClient'
import { HttpUserRepository } from '@core/infrastructure/repositories/HttpUserRepository'
import { GetUsers } from '@core/useCases/GetUsers'

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com'

const httpClient = new HttpClient(JSON_PLACEHOLDER_BASE_URL)
const userRepository = new HttpUserRepository(httpClient)

export const container = {
  getUsers: new GetUsers(userRepository),
}

export interface Container {
  getUsers: GetUsers
}
