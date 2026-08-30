"use client";

import "swiper/css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import Slider from "./components/Slider";

const GalleySection = () => {
  return (
    <ObserverProvider id="gallery">
      <SectionTitle title="گالری" href="#gallery" />
      <div className="flex flex-col items-center gap-5 mx-auto">
        <h3 className="text-7xl text-secondary font-bold">گالری آثار چیست ؟</h3>
        <p className="text-4xl text-center text-secondary leading-14 font-extralight">
          در این بخش می‌توانید تصاویری از محیط هنرستان، کارگاه‌ها کلاس‌ها و
          فعالیت هنرجویان را مشاهده کنید
        </p>
        <Slider>
            <SwiperSlide className="bg-gray-700 size-48 my-3"></SwiperSlide>
            <SwiperSlide className="bg-gray-700 size-48 my-3"></SwiperSlide>
            <SwiperSlide className="bg-gray-700 size-48 my-3"></SwiperSlide>
            <SwiperSlide className="bg-gray-700 size-48 my-3"></SwiperSlide>
        </Slider>
      </div>
    </ObserverProvider>
  );
};

export default GalleySection;
