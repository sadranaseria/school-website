"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { createRoadmapStepSchema, CreateRoadmapStep } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRoadmapStep } from "./actions";
import { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

const RoadmapForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateRoadmapStep>({
    resolver: zodResolver(createRoadmapStepSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await createRoadmapStep(data);
      setShowForm(false);
      toast.success('مرحله با موفقیت ساخته شد');
      reset();
    } catch (error) {
      console.log(error);
      toast.error('مرحله ساخته نشد');
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <Button
        onClick={() => setShowForm(!showForm)}
        className={cn(
          "w-full h-20 border-2 text-center rounded-lg flex items-center justify-center group hover:scale-[1.1] transition-all cursor-pointer",
          showForm
            ? "bg-red-400 hover:bg-red-500 text-white border-red-600"
            : "bg-gray-100 hover:bg-gray-200 text-black border-gray-400",
        )}
      >
        <span>
          <TbCirclePlus
            className={cn(
              "size-6 mx-auto mb-1 transition-transform",
              showForm
                ? "stroke-white rotate-45"
                : "stroke-gray-600 group-hover:rotate-180",
            )}
          />
          {showForm ? "برگشتن" : "ساخت مرحله جدید"}
        </span>
      </Button>
      <form
        onSubmit={onSubmit}
        className={cn(
          "mt-4 shadow-2xl p-4 rounded-2xl transition-all",
          showForm
            ? "visible opacity-100 translate-y-3"
            : "invisible opacity-0",
        )}
      >
        <FieldSet>
          <FieldLegend className="text-gray-500 text-center">
            عنوان و توضیحات را وارد کنید
          </FieldLegend>
          <Field>
            <FieldLabel htmlFor="title">عنوان</FieldLabel>
            <Input id="title" {...register("title")} />
            {errors.title && <FieldError>{errors.title.message}</FieldError>}
          </Field>
          <Field>
            <FieldLabel htmlFor="description">توضیحات</FieldLabel>
            <Input id="description" {...register("description")} />
            {errors.description && (
              <FieldError>{errors.description.message}</FieldError>
            )}
          </Field>
          <Button type="submit">
            {isLoading ? <div className="flex items-center gap-2"><Spinner />در حال ساخت</div> : 'ساخت مرحله'}
          </Button>
        </FieldSet>
      </form>
    </>
  );
};

export default RoadmapForm;
