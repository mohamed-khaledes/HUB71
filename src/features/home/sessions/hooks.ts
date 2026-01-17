import { api_sessions } from './api'
import { useQuery } from '@tanstack/react-query'

export const useGetSessions = () => {
  return useQuery({
    queryFn: () => api_sessions.all(),
    select: res => res?.data?.sessions,
    queryKey: ['sessions']
  })
}
