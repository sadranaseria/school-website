"use client";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PassedWithImages } from "../(admin)/admin/passeds/types";
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
        modules={[Autoplay]}
        className="mySwiper"
    >
      <SwiperSlide style={{ paddingRight: 0, paddingBottom: 0, paddingTop: 0, paddingLeft: 0 }}>
          <Card className="size-50 items-center p-2 rounded-3xl ring-0 shadow-xs">
            <div className="size-30">
              <Image
                src={passed.images[0].url}
                alt={`Image of passed ${passed.images[0].passedId}`}
                width={500}
                height={500}
                className="size-full object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-body md:text-caption">{passed.name}</CardTitle>
              <Badge className="py-3.5 rounded-md">
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
