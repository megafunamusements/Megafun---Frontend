import { UpdateListSkeleton } from '@/app/components/Shimmer'

export default function UpdatesLoading() {
  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <div className="h-3 w-32 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-10 w-48 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-4 w-80 bg-gray-200 rounded mx-auto animate-pulse" />
        </div>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 5 }).map((_, i) => <UpdateListSkeleton key={i} />)}
        </div>
      </div>
    </main>
  )
}
