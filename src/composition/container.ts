import { HttpClient } from '@core/infrastructure/http/HttpClient'
import { HttpUserRepository } from '@core/infrastructure/repositories/HttpUserRepository'
import { LocalAuthRepository } from '@core/infrastructure/repositories/LocalAuthRepository'
import { LocalStorageSessionRepository } from '@core/infrastructure/session/LocalStorageSessionRepository'
import { GetSession } from '@core/useCases/GetSession'
import { GetUsers } from '@core/useCases/GetUsers'
import { Login } from '@core/useCases/Login'
import { Logout } from '@core/useCases/Logout'

const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com'

const httpClient = new HttpClient(JSON_PLACEHOLDER_BASE_URL)
const userRepository = new HttpUserRepository(httpClient)
const authRepository = new LocalAuthRepository()
const sessionRepository = new LocalStorageSessionRepository()

export const container = {
  getUsers: new GetUsers(userRepository),
  login: new Login(authRepository, sessionRepository),
  getSession: new GetSession(sessionRepository),
  logout: new Logout(sessionRepository),
}

export interface Container {
  getUsers: GetUsers
  login: Login
  getSession: GetSession
  logout: Logout
}
