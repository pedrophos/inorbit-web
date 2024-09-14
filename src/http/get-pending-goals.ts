import { base_url } from '../env'

type PendingGoals = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoals> {
  const response = await fetch(`${base_url}/pending-goals`)
  const data = await response.json()

  return data.pendingGoals
}
