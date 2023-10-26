import client from './client'
import { UserModel } from '../models/UserModel'

export interface LoginDTO {
  email: string
  password: string
}

export const login = async ({ email, password }: LoginDTO) => {
  const { data } = await client.post<UserModel>('/sessions', {
    email,
    password,
  })
  return data
}
