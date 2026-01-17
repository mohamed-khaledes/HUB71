import { baseUrlAxios, AxiosResponse } from '@/utils/baseUrlAxios'
import { TFormData } from './type'

export const api_registration = {
  registration: async (data: TFormData): Promise<AxiosResponse<any>> => {
    return baseUrlAxios.post(`contact`, data)
  }
}
