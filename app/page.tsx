import { productService } from '@/lib/services/productService'
import { updateService } from '@/lib/services/updateService'
import { galleryService } from '@/lib/services/galleryService'
import { Product, Update, Gallery, resolveImageUrl } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import SubscribeForm from '@/app/components/SubscribeForm'
import HeroCarousel from '@/app/components/HeroCarousel'

export default async function Home() {
  const [products, updates, gallery] = await Promise.all([
    productService.getAll().catch(() => [] as Product[]),
    updateService.getAll().catch(() => [] as Update[]),
    galleryService.getAll().catch(() => [] as Gallery[]),
  ])

  return (
    <main className="bg-white text-gray-900">

      <HeroCarousel />

      {/* Stats bar */}
      <section className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-6">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '500+', label: 'Installations' },
            { value: '9+', label: 'Product Lines' },
            { value: '24/7', label: 'Support' },
          ].map(s => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-yellow-500">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-2">What We Build</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Products</h2>
        </div>
        {products.length === 0 ? (
          <div className="text-center py-20 text-gray-400 border border-dashed border-gray-200 rounded-2xl">
            <p className="text-4xl mb-3">🎡</p>
            <p>No products yet — start the API and add some.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-yellow-400 transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm">
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  {p.image_url ? (
                    <Image src={resolveImageUrl(p.image_url)} alt={p.name} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">🎭</div>
                  )}
                  <span className={`absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-semibold ${
                    p.availability === 'instock'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {p.availability === 'instock' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{p.description}</p>
                  <Link href={`/products/${p.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-yellow-500 text-sm font-semibold hover:gap-2 transition-all">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <Link href="/products"
            className="border border-yellow-500 text-yellow-600 px-8 py-3 rounded-full text-sm font-semibold hover:bg-yellow-50 transition">
            See All Products
          </Link>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-2">News & Announcements</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Latest Updates</h2>
          </div>
          {updates.length === 0 ? (
            <p className="text-center text-gray-400 py-10">No updates yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {updates.slice(0, 6).map((u) => (
                <div key={u.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all hover:-translate-y-1 shadow-sm">
                  {u.image_url && (
                    <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                      <Image src={resolveImageUrl(u.image_url)} alt={u.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-xs text-yellow-500 mb-2 font-semibold">
                      {new Date(u.published_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-3">{u.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-500 text-xs font-semibold tracking-widest uppercase mb-2">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Gallery</h2>
        </div>
        {gallery.length === 0 ? (
          <p className="text-center text-gray-400 py-10">No gallery images yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {gallery.slice(0, 8).map((g, i) => (
              <div key={g.id}
                className={`relative rounded-xl overflow-hidden group shadow-sm ${i === 0 ? 'col-span-2 row-span-2 h-80' : 'h-36'}`}>
                <Image src={resolveImageUrl(g.image_url)} alt="Gallery" fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <Link href="/gallery"
            className="border border-yellow-500 text-yellow-600 px-8 py-3 rounded-full text-sm font-semibold hover:bg-yellow-50 transition">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #1B002F 0%, #0070D0 100%)' }}>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-blue-200 text-xs font-semibold tracking-widest uppercase mb-3">Stay in the Loop</p>
          <h2 className="text-3xl font-extrabold text-white mb-3">Get Latest Updates</h2>
          <p className="text-blue-100 mb-6 text-sm">New products, installations and announcements — straight to your inbox.</p>
          <SubscribeForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-gray-500 mb-8">Tell us your requirements and we'll design the perfect attraction for your venue.</p>
          <Link href="/contact"
            className="text-white font-bold px-10 py-4 rounded-full transition text-sm tracking-wide shadow-lg hover:opacity-90 inline-block"
            style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
            Contact Us Today
          </Link>
        </div>
      </section>

    </main>
  )
}
