'use client'
import { useState } from 'react'
import { subscriberService } from '@/lib/services/subscriberService'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await subscriberService.subscribe(email)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-3 rounded-full bg-white/15 border border-white/30 text-white placeholder-blue-200 w-full sm:w-72 focus:outline-none focus:border-white text-sm"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-white font-bold px-6 py-3 rounded-full transition disabled:opacity-50 text-sm whitespace-nowrap shadow-sm hover:bg-blue-50"
        style={{ color: '#0070D0' }}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && <p className="text-blue-100 text-sm self-center font-semibold">You're subscribed!</p>}
      {status === 'error' && <p className="text-red-300 text-sm self-center">Failed. Try again.</p>}
    </form>
  )
}
