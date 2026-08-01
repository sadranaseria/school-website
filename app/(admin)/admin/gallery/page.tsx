'use client';

import useFile from "../../store";
import Uploader from "./_components/Uploader";

const GalleryPage = () => {
  const files = useFile((state) => state.files);
  return (
    <div className="flex flex-col items-center max-w-4xl w-full space-y-4 text-center">
      <h2 className="mb-5 font-bold text-3xl">عکس های هنرستان</h2>
      <Uploader />
      <div className="grid grid-cols-1 sm:grid-col-3 md:grid-cols-4 gap-4">
        {files.map((file) => (
          <div className="size-40" key={file.id}>
            <img className="size-full object-cover rounded-lg" src={file.objectUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
