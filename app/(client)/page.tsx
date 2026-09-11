import { Metadata } from "next";
import GalleySection from "./GalleySection";
import HeaderContent from "./HeaderContent";
import MajorSection from "./MajorSection";
import QuestionsSection from "./QuestionsSection";
import RoadMapSeciton from "./RoadMapSeciton";
import NewsSection from "./NewsSection";
import PassedsSection from "./PassedsSection";


export default function Home() {
  return (
    <>
      <HeaderContent />
      <MajorSection />
      <PassedsSection />
      <GalleySection />
      <NewsSection />
      <QuestionsSection />
      <RoadMapSeciton />
    </>
  );
}

export const metadata: Metadata = {
  title: "هنرستان شهید طهرانی مقدم",
  description: "This page talk about school and feature of it",
};
