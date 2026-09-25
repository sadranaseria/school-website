import Image from "next/image";
import { MajorsWithImages } from "../(admin)/admin/majors/types";
import ObserverProvider from "./components/ObserverProvider";

const MajorCard = ({ major }: { major: MajorsWithImages }) => {
    console.log(major.images)
  return (
    <ObserverProvider id="majors">
      <div
        className={`flex flex-col lg:flex-row items-center text-center gap-10 xl:gap-40 lg:items-start max-w-7xl mx-auto lg:text-right ${major.id % 2 === 0 && "flex-row-reverse"}`}
      >
        <Image
          src={major.images[0].url}
          alt="Major Image"
          width={500}
          height={500}
          className="size-60 xl:w-100 xl:h-90 rounded-2xl"
        />
        <div>
          <h3 className="text-t3 text-secondary mb-5">{major.title}</h3>
          <p className="text-gray-600 text-caption">{major.description}</p>
        </div>
      </div>
    </ObserverProvider>
  );
};

export default MajorCard;
