import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ObserverProvider from "./components/ObserverProvider";
import SectionTitle from "./components/SectionTitle";
import { prisma } from "@/prisma/client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { FaUniversity } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import PassedCard from "./PassedCard";

const PassedsSection = async () => {
  const passeds = await prisma.passed.findMany({
    include: { images: true },
  });

  return (
    <>
      <ObserverProvider id="passeds">
        <SectionTitle title="قبولی ها" href="#passeds" />
        <div className="flex gap-4 my-20">
          {passeds.map((passed) => (
            <PassedCard key={passed.id} passed={passed} />
          ))}
        </div>
      </ObserverProvider>
    </>
  );
};

export default PassedsSection;
