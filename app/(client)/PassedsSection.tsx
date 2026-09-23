import {prisma} from "@/prisma/client";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import {SwiperSlide} from "swiper/react";
import PassedSlider from "@/app/(client)/PassedSlider";

const PassedsSection = async () => {
    const passeds = await prisma.passed.findMany({
        include: {images: true},
    });

    return (
        <section className="py-20">
            <ObserverProvider id="passeds">
                <SectionTitle title="قبولی ها" href="#passeds"/>
                <div className="max-w-7xl mx-auto flex gap-4 my-20">
                    <PassedSlider passeds={passeds} />
                </div>
            </ObserverProvider>
        </section>
    );
};

export default PassedsSection;
