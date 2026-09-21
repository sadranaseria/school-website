import Image from "next/image";
import { MajorsWithImages } from "../(admin)/admin/majors/types";
import ObserverProvider from "./components/ObserverProvider";

const MajorCard = ({ major }: { major: MajorsWithImages }) => {
  return (
    <ObserverProvider id="majors">
      <div
        className={`flex gap-30 max-w-7xl mx-auto text-right ${major.id % 2 === 0 && "flex-row-reverse"}`}
      >
        <Image
          src={major.images[0].url}
          alt="Major Image"
          width={500}
          height={500}
          className="w-140 h-110 rounded-[40px]"
        />
        <div>
          <h3 className="text-xl text-secondary mb-5">{major.title}</h3>
          <p className="text-gray-600">{major.description}</p>
        </div>
      </div>
    </ObserverProvider>
  );
};

export default MajorCard;
