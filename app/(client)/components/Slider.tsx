"use client";

import { Button } from "@/components/ui/button";
import { PropsWithChildren, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "./styles.css";
import { PaginationOptions } from "swiper/types";

const Slider = ({ children }: PropsWithChildren) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncEdge = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const paginationConfig: PaginationOptions = {
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
    dynamicBullets: true,
  }

  return (
    <section className="p-30">
      <Swiper
        pagination={paginationConfig}
        onSwiper={setSwiper}
        onSlideChange={syncEdge}
        onBreakpoint={syncEdge}
        onResize={syncEdge}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={5}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper pb-14!"
      >
        {children}
      </Swiper>
      <div className="space-x-4 flex justify-center">
        <Button
          onClick={() => swiper?.slidePrev()}
          disabled={isBeginning}
          variant="outline"
          className="size-12 border-indigo-500 rounded-full hover:bg-indigo-600 hover:border-indigo-600 hover:scale-95 group"
        >
          <HiArrowRight className="size-5 text-indigo-500 group-hover:text-white" />
        </Button>
        <Button
          onClick={() => swiper?.slideNext()}
          disabled={isEnd}
          variant="outline"
          className="size-12 border-indigo-500 rounded-full hover:bg-indigo-600 hover:scale-95 group"
        >
          <HiArrowLeft className="size-5 text-indigo-500 group-hover:text-white" />
        </Button>
      </div>
    </section>
  );
};

export default Slider;
