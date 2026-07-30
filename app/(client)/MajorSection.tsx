import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import MajorCard from "./MajorCard";

const MajorSection = async () => {
  const majors = await prisma.major.findMany();

  return (
    <>
      <ObserverProvider id="majors">
        <SectionTitle title="رشته ها" href="#majors" />
      </ObserverProvider>
      {majors.map((major) => (
          <MajorCard key={major.id} major={major} />
        ))}
    </>
  );
};

export default MajorSection;
