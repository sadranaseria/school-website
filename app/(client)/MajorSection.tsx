import { prisma } from "@/prisma/client";
import SectionTitle from "./components/SectionTitle";
import MajorCard from "./MajorCard";

const MajorSection = async () => {
  const majors = await prisma.major.findMany();

  return (
    <div>
      <SectionTitle title="رشته ها" />
      {majors.map((major) => (
        <MajorCard key={major.id} major={major} />
      ))}
    </div>
  );
};

export default MajorSection;
