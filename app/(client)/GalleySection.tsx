"use client";

import { SwiperSlide } from "swiper/react";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import { getImages } from "../(admin)/admin/gallery/actions";

const GalleySection = () => {
  const [images , setImages] = useState<Array<string>>([]);
  useEffect(() => {
      let isMounted = true;
      async function fetchImages() {
        const result = await getImages();
        setImages(result.map(r => r.url));
      }
      fetchImages();
      return () => {
        isMounted = false;
      };
    }, []);
    console.log(images);
    
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
            <div>
              {images.map(image => (
                <SwiperSlide key={image}>
                  <img src={image} alt="image" />
                </SwiperSlide>
              ))}
            </div>
        </Slider>
      </div>
    </ObserverProvider>
  );
};

export default GalleySection;
