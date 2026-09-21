"use client";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PassedWithImages } from "../(admin)/admin/passeds/types";
import "./styles.css";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaUniversity } from "react-icons/fa";
import Image from "next/image";

const PassedCard = ({ passed }: { passed: PassedWithImages }) => {
  return (
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction:  false,
        }}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <Card className="max-w-90 w-full flex flex-row items-center">
            <CardHeader className="w-35">
              <Image
                src={passed.images[0].url}
                alt={`Image of passed ${passed.images[0].passedId}`}
                width={500}
                height={500}
                className="size-20 object-cover rounded-full"
              />
            </CardHeader>
            <div className="space-y-2">
              <CardTitle>{passed.name}</CardTitle>
              <Badge className="p-2">
                <FaUniversity />
                {passed.univercity}
              </Badge>
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
  );
};

export default PassedCard;
