import { apiFetch, Update } from '@/lib/api'

export const updateService = {
  getAll: (): Promise<Update[]> =>
    apiFetch<Update[]>('/api/updates'),

  getById: (id: number): Promise<Update> =>
    apiFetch<Update>(`/api/updates/${id}`),

  getLatest: (limit = 3): Promise<Update[]> =>
    apiFetch<Update[]>(`/api/updates?limit=${limit}`),

  create: (data: Omit<Update, 'id' | 'published_at'>): Promise<Update> =>
    apiFetch<Update>('/api/updates', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  delete: (id: number): Promise<void> =>
    apiFetch<void>(`/api/updates/${id}`, { method: 'DELETE' }),
}
