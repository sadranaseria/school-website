import React from "react";
import SectionTitle from "./components/SectionTitle";

const GalleySection = () => {
  return (
    <div>
      <SectionTitle title="گالری" />
      <div className="w-xl flex flex-col items-center gap-5">
          <h3 className="text-7xl text-primary font-bold">گالری آثار چیست ؟</h3>
          <p className="text-4xl text-center leading-12">
            در این بخش می‌توانید تصاویری از محیط هنرستان، کارگاه‌ها کلاس‌ها و فعالیت
            هنرجویان را مشاهده کنید
          </p>
      </div>
    </div>
  );
};

export default GalleySection;
