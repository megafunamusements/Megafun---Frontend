export interface Product {
  id: number
  name: string
  description: string
  image_url: string
  availability: 'instock' | 'outofstock'
  price: number
  slug: string
  created_at: string
}

export interface CreateProductDTO {
  name: string
  description: string
  image_url: string
  availability?: 'instock' | 'outofstock'
  price?: number
  slug: string
}
