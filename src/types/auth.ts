import type { HttpStatusCode } from "axios"

interface User {
  id: string
  name: string
  email: string
  phone: string
  password: null
  bio: null | string
  provider: null | string
  gender: null | string
  role: string
  createdAt: string
  updatedAt: string
}

export interface PostLoginPayload {
  email: string
  password: string
}

export interface PostLoginResponse {
  status: HttpStatusCode,
  message: string
  data: {
    token: string
    user: User | null
  } | null,
  meta: null,
  errors: null
}
