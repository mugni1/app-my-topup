import { getDetailGameService } from "@/api/Services"
import { handleErrorResponse } from "@/libs/response"
import type { GetDetailGameResponse } from "@/types/games.type"
import { useQuery } from "@tanstack/vue-query"

const fetch = async (id: string): Promise<GetDetailGameResponse> => {
  try {
    const result = await getDetailGameService(id)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetDetailGame = (id: string) => {
  return useQuery({
    queryKey: ["detail-games", id],
    queryFn: () => fetch(id)
  })
}
