import { prisma } from "@/prisma/client";

import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import GallerySlider from "./GalleySlider";

const GalleySection = async () => {
  const images = await prisma.gallery.findMany();

  return (
    <section className="container py-20">
      <ObserverProvider id="gallery">
        <SectionTitle title="گالری" href="#gallery" />
        <div className="flex flex-col items-center gap-5 mx-auto">
          <h3 className="text-2xl md:text-t2 text-secondary font-bold">
            گالری آثار چیست ؟
          </h3>
          <p className="text-body md:text-caption text-center text-secondary leading-8 font-extralight">
            در این بخش می‌توانید تصاویری از محیط هنرستان، کارگاه‌ها کلاس‌ها و
            فعالیت هنرجویان را مشاهده کنید
          </p>
        </div>
        <GallerySlider images={images} />
      </ObserverProvider>
    </section>
  );
};

export default GalleySection;
