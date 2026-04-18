import { ProductCardSkeleton, UpdateCardSkeleton, GalleryImageSkeleton } from '@/app/components/Shimmer'

export default function HomeLoading() {
  return (
    <main className="bg-white">
      {/* Hero skeleton */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-gray-200 animate-pulse">
        <div className="text-center px-6 space-y-4 w-full max-w-2xl">
          <div className="h-4 w-40 bg-gray-300 rounded-full mx-auto" />
          <div className="h-16 w-3/4 bg-gray-300 rounded-xl mx-auto" />
          <div className="h-6 w-1/2 bg-gray-300 rounded-xl mx-auto" />
          <div className="flex gap-4 justify-center mt-6">
            <div className="h-12 w-36 bg-gray-300 rounded-full" />
            <div className="h-12 w-36 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Stats skeleton */}
      <section className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="h-8 w-16 bg-gray-200 rounded mx-auto animate-pulse" />
              <div className="h-3 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </section>

      {/* Products skeleton */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <div className="h-3 w-24 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)}
        </div>
      </section>

      {/* Updates skeleton */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <div className="h-3 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => <UpdateCardSkeleton key={i} />)}
          </div>
        </div>
      </section>

      {/* Gallery skeleton */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <div className="h-3 w-20 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-8 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <GalleryImageSkeleton tall />
          <GalleryImageSkeleton tall />
          {Array.from({ length: 6 }).map((_, i) => <GalleryImageSkeleton key={i} />)}
        </div>
      </section>
    </main>
  )
}
