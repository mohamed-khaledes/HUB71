import { TSessions } from './type'
import { baseUrlAxios, AxiosResponse } from '@/utils/baseUrlAxios'

export const api_sessions = {
  all: async (params?: any): Promise<AxiosResponse<TSessions>> => {
    return baseUrlAxios.get(`sessions`, { params })
  }
}
