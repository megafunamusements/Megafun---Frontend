'use client'
import { useState } from 'react'
import { enquiryService } from '@/lib/services/enquiryService'

export default function ContactPage() {
  const [form, setForm] = useState({ message: '', contact: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      await enquiryService.submit(form)
      setStatus('success')
      setForm({ message: '', contact: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen text-gray-900">

      {/* Page header */}
      <div className="relative pt-28 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B002F 0%, #0070D0 60%, #38a8f5 100%)' }}>
        <div className="absolute -bottom-1 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, #f9fafb)' }} />
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/25">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
            Let's Build Something Together
          </h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Whether you're planning a new amusement park or upgrading an existing attraction — we're here to help.
          </p>
        </div>
      </div>

      {/* Contact info + form */}
      <div className="bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Info */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#0070D0' }}>Contact Info</p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 leading-tight">Find Us Here</h2>
            <div className="space-y-5 mb-8">
              {[
                { icon: '📍', label: 'Address', value: '#13D, 4th Street, Mogappair Industrial Estate, Chennai - 600037, India' },
                { icon: '📞', label: 'Phone', value: '+91 9566201124' },
                { icon: '✉️', label: 'Email', value: 'megafunamusements@gmail.com' },
                { icon: '🕐', label: 'Hours', value: 'Mon – Sun: 9:30 AM – 6:00 PM' },
              ].map(item => (
                <div key={item.label} className="flex gap-4 items-start">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-0.5">{item.label}</p>
                    <p className="text-gray-700 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get Directions button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=13.086445,80.167354"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-full hover:opacity-90 transition shadow-md"
              style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
              <span>🗺️</span> Get Directions
            </a>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Query</h2>
            {status === 'success' ? (
              <div className="text-center py-12">
                <p className="text-5xl mb-4">✅</p>
                <h3 className="text-xl font-bold text-green-600 mb-2">Query Submitted!</h3>
                <p className="text-gray-500 text-sm mb-6">We'll get back to you as soon as possible.</p>
                <button onClick={() => setStatus('idle')}
                  className="text-sm underline underline-offset-2" style={{ color: '#0070D0' }}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1.5 block">
                    Your Message
                  </label>
                  <textarea
                    required
                    placeholder="Describe your requirements..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 h-36 resize-none text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1.5 block">
                    Email or Phone
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="your@email.com or +91 XXXXXXXXXX"
                    value={form.contact}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="text-white font-bold py-4 rounded-xl transition disabled:opacity-50 text-sm tracking-wide shadow-sm hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Query'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Make sure the API is running.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full">
        <div className="relative">
          {/* Map label bar */}
          <div className="px-6 py-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
            <div className="flex items-center gap-3 text-white">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-bold text-sm">Megafun Amusements</p>
                <p className="text-blue-200 text-xs">#13D, 4th Street, Mogappair Industrial Estate, Chennai - 600037</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/13.086445,80.167354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition font-semibold border border-white/30">
              Open in Maps ↗
            </a>
          </div>

          {/* Embedded map */}
          <iframe
            title="Megafun Amusements Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.0!2d80.16735468059778!3d13.086445395696511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzExLjIiTiA4MMKwMTAnMDIuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </main>
  )
}
