import Image from "next/image";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import Imagesource from "@/public/jellies.webp";

const InfoSection = () => {
  return (
    <section className="py-20">
      <ObserverProvider id="info">
        <SectionTitle title="درباره هنرستان" href="#info" />
        <div className="flex justify-between md:gap-15 px-5">
          <Image
            src={Imagesource}
            alt="image"
            width={500}
            height={500}
            className="size-100 object-cover rounded-4xl"
          />
          <div className="max-w-4xl space-y-4">
            <h2 className="text-t2 text-primary">هنرستان طهرانی مقدم</h2>
            <p className="text-body md:text-caption leading-8">
              متن تستی جهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت
              نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت نمایشجهت
              نمایش{" "}
            </p>
          </div>
        </div>
      </ObserverProvider>
    </section>
  );
};

export default InfoSection;
