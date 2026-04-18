const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  // Ensure trailing slash to avoid 307 redirects from FastAPI
  const normalizedPath = path.endsWith('/') ? path : `${path}/`
  const res = await fetch(`${BASE_URL}${normalizedPath}`, {
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

// Helper to fix localhost image URLs in production
export function resolveImageUrl(url: string): string {
  if (!url) return ''
  if (url.startsWith('http://localhost:8000') || url.startsWith('http://localhost')) {
    return url.replace(/^http:\/\/localhost:\d+/, BASE_URL)
  }
  return url
}

// Products
export const getProducts = () => apiFetch<Product[]>('/api/products')
export const getProduct = (id: number) => apiFetch<Product>(`/api/products/${id}`)

// Updates
export const getUpdates = () => apiFetch<Update[]>('/api/updates')

// Gallery
export const getGallery = () => apiFetch<Gallery[]>('/api/gallery')

// Enquiry
export const submitEnquiry = (data: { message: string; contact: string }) =>
  apiFetch('/api/enquiries', { method: 'POST', body: JSON.stringify(data) })

// Subscribe
export const subscribe = (email: string) =>
  apiFetch('/api/subscribers', { method: 'POST', body: JSON.stringify({ email }) })

// Types
export interface Product {
  id: number
  name: string
  description: string
  image_url: string
  availability: string
  price: number
  slug: string
}

export interface Update {
  id: number
  title: string
  content: string
  image_url: string
  published_at: string
}

export interface Gallery {
  id: number
  image_url: string
  created_at: string
}

export interface Enquiry {
  id: number
  message: string
  contact: string
  source: string
  created_at: string
}

export interface CreateEnquiryDTO {
  message: string
  contact: string
  source?: string
}

export interface Subscriber {
  id: number
  email: string
  subscribed_at: string
}

export interface ApiResponse<T> {
  data?: T
  message?: string
  error?: string
}
