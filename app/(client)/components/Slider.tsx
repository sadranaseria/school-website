import React, { PropsWithChildren, ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const Slider = ({ children } : PropsWithChildren) => {
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination , Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
  );
};

export default Slider;
