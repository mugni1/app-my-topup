import type { HttpStatusCode } from "axios"
import type { MetaType } from "./global.type"

export interface GetGameType {
  id: string
  title: string
  studio: string
  coverUrl: string
  coverId: string
  imageUrl: string
  imageId: string
  createdAt: string
  updatedAt: string
}


export interface GetGamesResponse {
  status: HttpStatusCode
  message: string
  data: GetGameType[] | null
  meta: MetaType | null
  errors: null
}

interface GetDetailGameCategoryItem {
  id: string
  name: string
  merchantName: string
  imageUrl: string
  imageId: string
  price: number
  quantity: number
}

interface GetDetailGameCategory {
  id: string
  name: string
  code: string
  items: GetDetailGameCategoryItem[]
}

export interface GetDetailGame {
  id: string,
  title: string
  studio: string
  coverUrl: string
  coverId: string
  imageUrl: string
  imageId: string
  categories: GetDetailGameCategory[]
}

export interface GetDetailGameResponse {
  status: HttpStatusCode
  message: string
  data: GetDetailGame | null
  meta: null
  errors: null
}
