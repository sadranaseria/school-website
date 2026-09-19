import { Metadata } from "next";
import Summery from "./Summery";
import { prisma } from "@/prisma/client";
import DashboardHeader from "./DashboardHeader";
import DataChart from "./DataChart";

const Dashboard = async () => {
  const countOfMajors = await prisma.major.count();
  const countOfImages = await prisma.image.count();
  const countOfNews = await prisma.news.count();
  const countOfPasseds = await prisma.passed.count();
  const majors = await prisma.major.findMany();

  return (
    <div>
      <DashboardHeader />
      <Summery
        majors={countOfMajors}
        images={countOfImages}
        news={countOfNews}
        passeds={countOfPasseds}
      />
      <DataChart majors={majors} />
    </div>
  );
};

export const metadata: Metadata = {
  title: "طهرانی ادمین - داشبورد",
  description:
    "This page for admin and just admin can enter it. And admin can see some data in this page",
};

export default Dashboard;
