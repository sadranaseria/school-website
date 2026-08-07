import { Metadata } from "next";
import GalleySection from "./GalleySection";
import HeaderContent from "./HeaderContent";
import MajorSection from "./MajorSection";
import QuestionsSection from "./QuestionsSection";
import RoadMapSeciton from "./RoadMapSeciton";


export default function Home() {
  return (
    <>
      <HeaderContent />
      <MajorSection />
      <GalleySection />
      <QuestionsSection />
      <RoadMapSeciton />
    </>
  );
}

export const metadata: Metadata = {
  title: "هنرستان شهید طهرانی مقدم",
  description: "This page talk about school and feature of it",
};
