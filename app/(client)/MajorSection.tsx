import { prisma } from "@/prisma/client";
import SectionTitle from "./components/SectionTitle";
import MajorCard from "./MajorCard";

const MajorSection = async () => {
  const majors = await prisma.major.findMany();

  return (
    <>
      <SectionTitle title="رشته ها" href="#majors" />
      {majors.map((major) => (
        <MajorCard key={major.id} major={major} />
      ))}
    </>
  );
};

export default MajorSection;
