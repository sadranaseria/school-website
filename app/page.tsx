import GalleySection from "./GalleySection";
import HeaderContent from "./HeaderContent";
import MajorSection from "./MajorSection";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
    <header>
      <NavBar />
      <HeaderContent />
    </header>
    <main>
      <MajorSection />
      <GalleySection />
    </main>
    </>
  );
}
