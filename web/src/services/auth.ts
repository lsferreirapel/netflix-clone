import { AxiosResponse } from 'axios';
import api from './api';

interface AuthResponse {
  token: string;
}
export default async function asyncSignIn(
  user: string
): Promise<AxiosResponse<AuthResponse>> {
  const token = await api.post(`/auth/${user}`);
  return token;
}
