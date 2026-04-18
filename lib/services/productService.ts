import { apiFetch, Product } from '@/lib/api'

export const productService = {
  getAll: (): Promise<Product[]> =>
    apiFetch<Product[]>('/api/products'),

  getById: (id: number): Promise<Product> =>
    apiFetch<Product>(`/api/products/${id}`),

  getBySlug: (slug: string): Promise<Product> =>
    apiFetch<Product>(`/api/products/slug/${slug}`),

  create: (data: Omit<Product, 'id' | 'created_at'>): Promise<Product> =>
    apiFetch<Product>('/api/products', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  update: (id: number, data: Partial<Product>): Promise<Product> =>
    apiFetch<Product>(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: (id: number): Promise<void> =>
    apiFetch<void>(`/api/products/${id}`, { method: 'DELETE' }),
}
