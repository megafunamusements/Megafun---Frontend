import { GalleryImageSkeleton } from '@/app/components/Shimmer'

export default function GalleryLoading() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white pt-28 pb-16 px-6">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="h-6 w-24 bg-indigo-100 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-4 w-72 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-white via-indigo-50/20 to-purple-50/10 px-6 py-16">
        <div className="max-w-7xl mx-auto columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <GalleryImageSkeleton tall={i % 5 === 0} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
