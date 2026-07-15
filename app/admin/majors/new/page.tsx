"use client";

import { createMajorSchema } from "@/app/vallidation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

type FormData = z.infer<typeof createMajorSchema>;

const NewMajorsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(createMajorSchema) });

  return (
    <form className="w-xl" onSubmit={handleSubmit((data) => console.log(data))}>
      <FieldSet>
        <FieldLegend>ساخت رشته</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">عنوان رشته</FieldLabel>
            <Input id="title" className="w-full" {...register("title")} />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="description">توضیحات رشته</FieldLabel>
            <Textarea {...register("description")} />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </Field>
          <Field>
            <Button className="cursor-pointer" type="submit">
              ثبت
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default NewMajorsPage;
