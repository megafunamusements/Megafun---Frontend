import { apiFetch, Enquiry, CreateEnquiryDTO } from '@/lib/api'

export const enquiryService = {
  submit: (data: CreateEnquiryDTO): Promise<{ message: string; id: number }> =>
    apiFetch('/api/enquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  getAll: (): Promise<Enquiry[]> =>
    apiFetch<Enquiry[]>('/api/enquiries'),

  getById: (id: number): Promise<Enquiry> =>
    apiFetch<Enquiry>(`/api/enquiries/${id}`),

  delete: (id: number): Promise<void> =>
    apiFetch<void>(`/api/enquiries/${id}`, { method: 'DELETE' }),
}
