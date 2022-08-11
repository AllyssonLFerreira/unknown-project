export interface AuthRequest {
  user: string,
  pwd: string
}

export interface AuthResponse {
  accessToken: string,
  user: string
}