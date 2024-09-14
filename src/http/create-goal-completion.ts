import { base_url } from '../env'

export async function createGoalCompletion(goalId: string) {
  await fetch(`${base_url}/completions`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
