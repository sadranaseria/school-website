import { Skeleton } from "@/components/ui/skeleton";

const NewNewsPageLoading = () => {
  return (
    <div className="flex w-full max-w-xl min-h-xl flex-col gap-18">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-20 bg-gray-200" />
        <Skeleton className="h-8 w-full bg-gray-200" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="h-4 w-24 bg-gray-200" />
        <Skeleton className="h-70 w-full bg-gray-200" />
      </div>
      <Skeleton className="h-50 p-3 w-full bg-gray-200" />
      <Skeleton className="h-8 w-full bg-gray-200" />
    </div>
  );
};

export default NewNewsPageLoading;
