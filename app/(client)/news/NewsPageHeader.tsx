import { HiOutlineNewspaper } from "react-icons/hi2";

const NewsPageHeader = ({ newsCount } : { newsCount : number }) => {
  return (
    <div className="relative mx-auto h-100 mt-50 mb-20">
      <div className="absolute bg-indigo-500 size-50 rounded-3xl top-0 left-0"></div>
      <div className="absolute bg-primary size-50 rounded-3xl bottom-0 right-0"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 backdrop-blur-3xl bg-gray-300/50 rounded-3xl flex items-center justify-center h-full">
        <div className="space-y-20">
          <h1 className="text-3xl">اخبار هنرستان طهرانی مقدم</h1>
          <div>
            <div className="flex items-center gap-5">
              <div className="size-13 flex items-center justify-center bg-gray-400 rounded-lg">
                <HiOutlineNewspaper className="size-8" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="font-bold">
                  {newsCount.toLocaleString("fa-IR")}
                </span>
                <span>تعداد اخبار</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPageHeader;