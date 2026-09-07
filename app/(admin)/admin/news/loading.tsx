import { Skeleton } from "@/components/ui/skeleton";

const NewsLoadingPage = () => {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-5">
      <Skeleton className="h-10 w-20 bg-gray-200" />
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex gap-4 w-full" key={index}>
          <Skeleton className="h-10 w-20 bg-gray-200" />
          <Skeleton className="h-10 w-24 bg-gray-200" />
          <Skeleton className="h-10 flex-1 bg-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default NewsLoadingPage;