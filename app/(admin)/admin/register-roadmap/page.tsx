"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import RoadmapForm from "./RoadmapForm";

const RegisterRoadmapPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="max-w-sm mx-auto">
      <div className="w-full h-20 border-2 border-primary text-center rounded-lg flex items-center justify-center">
        Something
      </div>
      <div className="w-0.5 bg-primary h-20 rounded-full mx-auto"></div>
      <Button
        onClick={() => setShowForm(!showForm)}
        className={cn(
          'w-full h-20 border-2 text-center rounded-lg flex items-center justify-center group hover:scale-[1.1] transition-all cursor-pointer',
          showForm ? 'bg-red-400 hover:bg-red-500 text-white border-red-600' : 'bg-gray-100 hover:bg-gray-200 text-black border-gray-400'
        )}
      >
        <span>
          <TbCirclePlus className={cn(
            'size-6 mx-auto mb-1 transition-transform',
            showForm ? 'stroke-white rotate-45' : 'stroke-gray-600 group-hover:rotate-180'
          )} />
          {showForm ? 'برگشتن' : 'ساخت مرحله جدید'}
        </span>
      </Button>
      <RoadmapForm showForm={showForm} />
    </section>
  );
};

export default RegisterRoadmapPage;
