import { apiFetch, Gallery } from '@/lib/api'

export const galleryService = {
  getAll: (): Promise<Gallery[]> =>
    apiFetch<Gallery[]>('/api/gallery'),

  getById: (id: number): Promise<Gallery> =>
    apiFetch<Gallery>(`/api/gallery/${id}`),

  create: (data: { image_url: string }): Promise<Gallery> =>
    apiFetch<Gallery>('/api/gallery', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  delete: (id: number): Promise<void> =>
    apiFetch<void>(`/api/gallery/${id}`, { method: 'DELETE' }),
}
