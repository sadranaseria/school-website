'use client';

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { createRoadmapStepSchema, CreateRoadmapStep } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createRoadmapStep } from "./actions";

const RoadmapForm = ({ showForm }: { showForm: boolean }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateRoadmapStep>({ resolver: zodResolver(createRoadmapStepSchema) });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createRoadmapStep(data);
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  });
  
  return (
    <form onSubmit={onSubmit} className={cn(
      'mt-4 shadow-2xl p-4 rounded-2xl transition-all',
      showForm ? 'visible opacity-100 translate-y-3' : 'invisible opacity-0'
    )}>
      <FieldSet>
        <FieldLegend className="text-gray-500 text-center">عنوان و توضیحات را وارد کنید</FieldLegend>
        <Field>
          <FieldLabel htmlFor="title">عنوان</FieldLabel>
          <Input id="title" {...register('title')} />
          {errors.title && <FieldError>{errors.title.message}</FieldError>}
        </Field>
        <Field>
          <FieldLabel htmlFor="description">توضیحات</FieldLabel>
          <Input id="description" {...register('description')} />
          {errors.description && <FieldError>{errors.description.message}</FieldError>}
        </Field>
        <Button type="submit">ساخت مرحله</Button>
      </FieldSet>
    </form>
  )
}

export default RoadmapForm;