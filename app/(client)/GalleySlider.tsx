"use client";

import { Gallery } from "@/lib/generated/prisma/client";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import Slider from "./components/Slider";

const GallerySlider = ({ images }: { images: Gallery[] }) => {

  console.log(images);
  return (
    <Slider>
      <div>
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              src={image.url}
              alt={`Image of index ${image.id}`}
              width={500}
              height={500}
              className="w-100 h-70 object-cover"
            />
          </SwiperSlide>
        ))}
      </div>
    </Slider>
  );
};

export default GallerySlider;
