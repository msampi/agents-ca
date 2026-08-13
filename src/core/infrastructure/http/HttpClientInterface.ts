export interface HttpClientInterface {
  get<T>(path: string): Promise<T>
  post<T>(path: string, data: unknown): Promise<T>
  put<T>(path: string, data: unknown): Promise<T>
  patch<T>(path: string, data: unknown): Promise<T>
  delete<T>(path: string): Promise<T>
}
