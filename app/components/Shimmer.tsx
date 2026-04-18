// Base shimmer animation wrapper
export function ShimmerBox({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 rounded-xl ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <ShimmerBox className="h-52 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <ShimmerBox className="h-5 w-3/4" />
        <ShimmerBox className="h-4 w-full" />
        <ShimmerBox className="h-4 w-2/3" />
        <ShimmerBox className="h-6 w-20 mt-2" />
      </div>
    </div>
  )
}

export function UpdateCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <ShimmerBox className="h-44 w-full rounded-none" />
      <div className="p-5 space-y-3">
        <ShimmerBox className="h-3 w-24" />
        <ShimmerBox className="h-4 w-full" />
        <ShimmerBox className="h-4 w-4/5" />
      </div>
    </div>
  )
}

export function GalleryImageSkeleton({ tall = false }: { tall?: boolean }) {
  return <ShimmerBox className={`w-full rounded-xl ${tall ? 'h-80' : 'h-36'}`} />
}

export function UpdateListSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col sm:flex-row">
      <ShimmerBox className="w-full sm:w-64 h-48 rounded-none flex-shrink-0" />
      <div className="p-6 flex flex-col gap-3 flex-1">
        <ShimmerBox className="h-3 w-28" />
        <ShimmerBox className="h-5 w-full" />
        <ShimmerBox className="h-4 w-4/5" />
        <ShimmerBox className="h-4 w-3/5" />
      </div>
    </div>
  )
}
