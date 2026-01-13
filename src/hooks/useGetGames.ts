import { getGamesService } from "@/api/Services";
import { handleErrorResponse } from "@/libs/response";
import type { GetGamesResponse, GetGameType } from "@/types/games.type";
import type { GetParamsType } from "@/types/global.type";
import { useQuery } from "@tanstack/vue-query";
import { unref, type Ref } from "vue";

const fetch = async (params: GetParamsType): Promise<GetGamesResponse> => {
  try {
    const result = await getGamesService(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetGames = (params: Ref<GetParamsType>) => {
  return useQuery({
    queryKey: ["games", params],
    queryFn: () => fetch(unref(params))
  })
}
