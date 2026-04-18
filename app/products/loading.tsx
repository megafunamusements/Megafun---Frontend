import { ProductCardSkeleton } from '@/app/components/Shimmer'

export default function ProductsLoading() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-white pt-28 pb-16 px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="h-6 w-28 bg-yellow-100 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-56 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-4 w-80 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-white via-orange-50/30 to-yellow-50/20 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => <ProductCardSkeleton key={i} />)}
        </div>
      </div>
    </main>
  )
}
