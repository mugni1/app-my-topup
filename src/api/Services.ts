import type { AxiosResponse } from 'axios';
import { ENDPOINT } from './Endpoints'
import { httpClient } from './HttpClient'
import type { PostPaymentPayload, PostPaymentResponse } from '@/types/payment.type';
import type { PostLoginPayload, PostLoginResponse } from '@/types/auth';

// PAYMENT SERVICES
export const postPaymentService = async (payload: PostPaymentPayload): Promise<AxiosResponse<PostPaymentResponse>> => {
  return httpClient.post(ENDPOINT.PAYMENT, payload)
}

// AUTH SERVICE
export const postLoginService = async (payload: PostLoginPayload): Promise<AxiosResponse<PostLoginResponse>> => {
  return httpClient.post(ENDPOINT.LOGIN, payload)
}
