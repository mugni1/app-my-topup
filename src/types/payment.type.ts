import type { HttpStatusCode } from "axios"

export interface PostPaymentData {
  token: string
  redirect_url: string
  id: string
  trx_id: string
}
export interface PostPaymentResponse {
  status: HttpStatusCode
  message: string
  data: PostPaymentData | null
  meta: null
  errors: null
}

export interface Item {
  id: string
  name: string
  category: string
  price: number
  quantity: number
}
export interface PostPaymentPayload {
  destination: string
  item_details: Item[]
}
