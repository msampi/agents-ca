import axios, { type AxiosInstance } from 'axios'
import type { HttpClientInterface } from './HttpClientInterface'

export class HttpClient implements HttpClientInterface {
  private readonly client: AxiosInstance

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  async get<T>(path: string): Promise<T> {
    const response = await this.client.get<T>(path)
    return response.data
  }

  async post<T>(path: string, data: unknown): Promise<T> {
    const response = await this.client.post<T>(path, data)
    return response.data
  }

  async put<T>(path: string, data: unknown): Promise<T> {
    const response = await this.client.put<T>(path, data)
    return response.data
  }

  async patch<T>(path: string, data: unknown): Promise<T> {
    const response = await this.client.patch<T>(path, data)
    return response.data
  }

  async delete<T>(path: string): Promise<T> {
    const response = await this.client.delete<T>(path)
    return response.data
  }
}
