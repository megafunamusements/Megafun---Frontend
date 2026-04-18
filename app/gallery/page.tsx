import { galleryService } from '@/lib/services/galleryService'
import { Gallery } from '@/lib/api'
import Image from 'next/image'

export default async function GalleryPage() {
  const images = await galleryService.getAll().catch(() => [] as Gallery[])

  return (
    <main className="min-h-screen text-gray-900">

      {/* Page header */}
      <div className="relative pt-28 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B002F 0%, #0070D0 60%, #38a8f5 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -bottom-1 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/25">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Gallery</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A look at our installations across malls, amusement parks and entertainment centres.
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="bg-gray-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {images.length === 0 ? (
            <div className="text-center py-20 text-gray-400 border border-dashed border-gray-200 rounded-2xl bg-white">
              <p className="text-4xl mb-3">🖼️</p>
              <p>No gallery images yet. Make sure the API is running.</p>
            </div>
          ) : (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {images.map((g) => (
                <div key={g.id}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow">
                  <Image
                    src={g.image_url}
                    alt="Gallery image"
                    width={600}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B002F]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </main>
  )
}
