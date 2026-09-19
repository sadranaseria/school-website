"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

const DAYS = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
  "شنبه",
];

const DashboardHeader = () => {
  const [day, setDay] = useState("");
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    const getDay = new Date().getDay();

    function switchDay() {
      for (let i = 0; i < 7; i++) {
        switch (getDay) {
          case i:
            setDay(DAYS[i]);
        }
      }
    }

    switchDay();

    return () => undefined;
  }, [day]);

  return (
    <section className="space-y-2">
      <div className="flex items-center gap-3 text-[14px]">
        امروز‌:
        <div className="flex items-center gap-2">
          <h2>{day}</h2>
          <p>({new Date().toLocaleDateString("fa-IR")})</p>
        </div>
      </div>

      <h1 className="text-4xl">
        سلام
        <span className="mr-2 bg-linear-to-bl from-sky-500 to-indigo-800 bg-clip-text text-transparent p-1 rounded-sm">
          {user?.given_name}
        </span>
      </h1>

      <p className="text-gray-500">
        اینجا میتوانید خلاصه ای از داشبورد را مشاهده کنید
      </p>
    </section>
  );
};

export default DashboardHeader;
