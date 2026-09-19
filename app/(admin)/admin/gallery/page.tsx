import { Metadata } from "next";
import ImageDropzone from "../_components/ImageDropzone";
import ImageTable from "./_components/ImageTable";

const GalleryPage = () => {
  return (
    <div className="max-w-screen min-h-screen flex items-center justify-center text-center">
      <div className="w-xl space-y-5">
        <h1 className="text-3xl font-bold">
          عکس های <span className="text-primary">هنرستان</span>
        </h1>
        <ImageDropzone action={true} />
        <ImageTable />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "طهرانی ادمین - گالری",
  description:
    "This page for admin and just admin can enter it. And this page is about. And admin can upload or see pictures",
};

export default GalleryPage;
