import { apiFetch, Subscriber } from '@/lib/api'

export const subscriberService = {
  subscribe: (email: string): Promise<{ message: string; id: number }> =>
    apiFetch('/api/subscribers', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),

  getAll: (): Promise<Subscriber[]> =>
    apiFetch<Subscriber[]>('/api/subscribers'),

  unsubscribe: (id: number): Promise<void> =>
    apiFetch<void>(`/api/subscribers/${id}`, { method: 'DELETE' }),
}
