import { sessions } from '@/constants'
import { Session } from './type'

export const fetchSessions = async (): Promise<Session[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  return sessions
}
