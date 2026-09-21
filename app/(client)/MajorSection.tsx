import { prisma } from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import MajorCard from "./MajorCard";

const MajorSection = async () => {
  const majors = await prisma.major.findMany({
    include: { images: true },
  });

  return (
    <>
      <ObserverProvider id="majors">
        <SectionTitle title="رشته ها" href="#majors" center={true} />
      <div className="space-y-10">
        {majors.map((major) => (
          <MajorCard key={major.id} major={major} />
          ))}
        </div>
      </ObserverProvider>
    </>
  );
};

export default MajorSection;
