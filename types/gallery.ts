export interface GalleryImage {
  id: number
  image_url: string
  created_at: string
}

export interface CreateGalleryDTO {
  image_url: string
}
