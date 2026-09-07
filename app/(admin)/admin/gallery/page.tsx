import { Metadata } from "next";
import Dropzone from "./_components/Dropzone";
import ImageTable from "./_components/ImageTable";

const GalleryPage = () => {
  return (
    <div className="max-w-screen min-h-screen flex items-center justify-center text-center">
      <div className=" space-y-5">
        <h1 className="text-3xl font-bold">
          عکس های <span className="text-primary">هنرستان</span>
        </h1>
        <Dropzone />
        <ImageTable />
      </div>
    </div>
  );
};

export const metadata : Metadata = {
  title : 'طهرانی ادمین - گالری',
  description : 'This page for admin and just admin can enter it. And this page is about. And admin can upload or see pictures'
}

export default GalleryPage;
