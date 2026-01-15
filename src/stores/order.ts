import type { PostPaymentData } from "@/types/payment.type";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useOrderStore = defineStore('order', () => {
  const orderDetail = ref<null | PostPaymentData>(null)

  const setOrderDetail = (value: PostPaymentData | null) => {
    orderDetail.value = value
  }
  const removeOrderDetail = () => {
    orderDetail.value = null
  }

  return { orderDetail, setOrderDetail, removeOrderDetail }
}, { persist: true })
