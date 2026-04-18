import { productService } from '@/lib/services/productService'
import { Product } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductsPage() {
  const products = await productService.getAll().catch(() => [] as Product[])

  return (
    <main className="min-h-screen text-gray-900">

      {/* Page header — navy to blue gradient matching logo */}
      <div className="relative pt-28 pb-20 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1B002F 0%, #0070D0 60%, #38a8f5 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute -bottom-1 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }} />
        <div className="relative text-center max-w-2xl mx-auto">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/25">
            What We Build
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Our Products</h1>
          <p className="text-blue-100 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            From immersive VR simulators to dark indoor attractions — built for malls, parks and entertainment centres.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="bg-gray-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-20 text-gray-400 border border-dashed border-gray-200 rounded-2xl bg-white">
              <p className="text-4xl mb-3">🎡</p>
              <p>No products yet. Make sure the API is running.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((p) => (
                <div key={p.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm">
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    {p.image_url ? (
                      <Image src={p.image_url} alt={p.name} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl">🎭</div>
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
                    <h2 className="font-bold text-lg text-gray-900 mb-2">{p.name}</h2>
                    <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{p.description}</p>
                    {p.price > 0 && (
                      <p className="mt-3 font-semibold text-sm" style={{ color: '#0070D0' }}>
                        ₹{p.price.toLocaleString()}
                      </p>
                    )}
                    <Link href={`/products/${p.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                      style={{ color: '#0070D0' }}>
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Link href="/contact"
              className="text-white font-bold px-8 py-4 rounded-full transition text-sm shadow-md hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
              Enquire About a Product
            </Link>
          </div>
        </div>
      </div>

    </main>
  )
}
