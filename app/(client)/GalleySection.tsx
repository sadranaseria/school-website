import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";

const GalleySection = () => {
  return (
    <ObserverProvider id="gallery">
        <SectionTitle title="گالری" href="#gallery" />
        <div className="w-xl flex flex-col items-center gap-5">
          <h3 className="text-7xl text-secondary font-bold">
            گالری آثار چیست ؟
          </h3>
          <p className="text-4xl text-center text-secondary leading-14 font-extralight">
            در این بخش می‌توانید تصاویری از محیط هنرستان، کارگاه‌ها کلاس‌ها و
            فعالیت هنرجویان را مشاهده کنید
          </p>
          <p className="text-4xl text-center text-secondary leading-14 font-extralight">
            در این بخش می‌توانید تصاویری از محیط هنرستان، کارگاه‌ها کلاس‌ها و
            فعالیت هنرجویان را مشاهده کنید
          </p>
          {/* then show the images in slider => swiper */}
        </div>
    </ObserverProvider>
  );
};

export default GalleySection;
