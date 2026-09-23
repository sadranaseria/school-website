import { Metadata } from "next";
import Summery from "./Summery";
import { prisma } from "@/prisma/client";
import DashboardHeader from "./DashboardHeader";
import DataChart from "./DataChart";
import GalleryLatests from "./GalleryLatests";
import NewsLatests from "./NewsLatests";

const Dashboard = async () => {
  const countOfMajors = await prisma.major.count();
  const countOfImages = await prisma.gallery.count();
  const countOfNews = await prisma.news.count();
  const countOfPasseds = await prisma.passed.count();
  const majors = await prisma.major.findMany();

  return (
    <section className="space-y-7">
      <DashboardHeader />
      <div className="flex items-center justify-between">
        <Summery
          majors={countOfMajors}
          images={countOfImages}
          news={countOfNews}
          passeds={countOfPasseds}
        />
        <DataChart majors={majors} />
      </div>
      <div className="flex gap-6 items-start">
        <GalleryLatests />
        <NewsLatests />
      </div>
    </section>
  );
};

export const metadata: Metadata = {
  title: "طهرانی ادمین - داشبورد",
  description:
    "This page for admin and just admin can enter it. And admin can see some data in this page",
};

export default Dashboard;
