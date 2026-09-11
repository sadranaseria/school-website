import { Metadata } from "next";
import GalleySection from "./GalleySection";
import MajorSection from "./MajorSection";
import NewsSection from "./NewsSection";
import PassedsSection from "./PassedsSection";
import QuestionsSection from "./QuestionsSection";
import RoadMapSeciton from "./RoadMapSeciton";

export default function Home() {
  return (
    <>
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
