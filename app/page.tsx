import GalleySection from "./GalleySection";
import HeaderContent from "./HeaderContent";
import MajorSection from "./MajorSection";
import NavBar from "./NavBar";
import QuestionsSection from "./QuestionsSection";
import RoadMapSeciton from "./RoadMapSeciton";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderContent />
      <MajorSection />
      <GalleySection />
      <QuestionsSection />
      <RoadMapSeciton />
    </>
  );
}
