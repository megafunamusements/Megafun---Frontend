import { updateService } from '@/lib/services/updateService'
import { Update } from '@/lib/api'
import Image from 'next/image'

export default async function UpdatesPage() {
  const updates = await updateService.getAll().catch(() => [] as Update[])

  return (
    <main className="min-h-screen text-gray-900">

      {/* Page header */}
      <div className="relative pt-28 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B002F 0%, #0070D0 60%, #38a8f5 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -bottom-1 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/25">
            News & Announcements
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Latest Updates</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Stay up to date with our latest installations, product launches and announcements.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">

        {updates.length === 0 ? (
            <div className="text-center py-20 text-gray-400 border border-dashed border-gray-200 rounded-2xl bg-white">
              <p className="text-4xl mb-3">📰</p>
              <p>No updates yet. Make sure the API is running.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {updates.map((u) => (
                <div key={u.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col sm:flex-row shadow-sm">
                  {u.image_url && (
                    <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-gray-100">
                      <Image src={u.image_url} alt={u.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col justify-center">
                    <p className="text-xs font-semibold mb-2" style={{ color: '#0070D0' }}>
                      {new Date(u.published_at).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'long', year: 'numeric'
                      })}
                    </p>
                    <h2 className="font-bold text-gray-900 text-lg leading-snug mb-3">{u.title}</h2>
                    {u.content && (
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{u.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
