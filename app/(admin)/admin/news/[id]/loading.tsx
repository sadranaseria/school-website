import { Skeleton } from "@/components/ui/skeleton";

const NewsDetailsLoadingPage = () => {
  return (
    <div className="w-5xl">
      <div className="flex justify-around items-center">
        <div className="space-y-4">
          <Skeleton className="w-50 p-3 bg-gray-200" />
          <Skeleton className="w-60 p-3 bg-gray-200" />
          <Skeleton className="w-70 p-3 bg-gray-200" />
        </div>
        <Skeleton className="w-100 h-50 p-3 bg-gray-200 rounded-4xl" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Skeleton className="h-5 w-full bg-gray-200" />
        <Skeleton className="h-5 w-full bg-gray-200" />
        <Skeleton className="h-5 w-3/4 bg-gray-200" />
        <div className="mt-4 flex flex-col gap-2">
          <Skeleton className="h-5 w-full bg-gray-200" />
          <Skeleton className="h-5 w-5/6 bg-gray-200" />
        </div>
      </div>
    </div>
  )
}

export default NewsDetailsLoadingPage;