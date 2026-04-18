export interface Update {
  id: number
  title: string
  content: string
  image_url: string
  published_at: string
}

export interface CreateUpdateDTO {
  title: string
  content: string
  image_url?: string
}
