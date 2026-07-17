"use client";

import { createMajor } from "@/app/actions";
import { CreateFormData, createMajorSchema } from "@/app/validation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewMajorsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<CreateFormData>({
    resolver: zodResolver(createMajorSchema),
    defaultValues: { description: "" },
  });

  return (
    <form
      className="w-xl"
      onSubmit={handleSubmit(async (data: CreateFormData) => {
        await createMajor(data);
      })}
    >
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
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMdeReact
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
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
