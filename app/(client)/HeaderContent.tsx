"use client";

import Image from "next/image";
import "./styles.css";
import headerContentImage from "@/public/jellies.webp";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HiArrowDown } from "react-icons/hi2";
import Link from "next/link";

const HeaderContent = () => {
  const [scrollY, setScrollY] = useState(80); // By rem

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(scrollY + (window.scrollY) / 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-screen mb-30 md:mb-130">
      <div className="max-w-4xl h-200 flex justify-center items-center mx-auto text-center">
        <h1 className="text-t1 md:text-display">
          هنرستان <br />
          <span className="bg-linear-to-l from-primary/50 to-indigo-600 bg-clip-text text-transparent font-extrabold">
            شهید طهرانی مقدم
          </span>
          <Button className="border-2 border-indigo-600 hover:border-0 p-2 mt-10 mx-auto rounded-full size-9 md:size-12 flex items-center justify-center bg-white cursor-pointer hover:scale-95 hover:bg-indigo-600 group">
            <Link href="#info">
              <HiArrowDown className="size-5 md:size-6 text-primary group-hover:text-white" />
            </Link>
          </Button>
        </h1>
      </div>
      <div
        style={{ maxWidth: `${scrollY}rem` }}
        className="hidden md:block mx-auto rounded-[40px] overflow-hidden"
      >
        <Image
          src={headerContentImage}
          alt="header_content_image"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default HeaderContent;
