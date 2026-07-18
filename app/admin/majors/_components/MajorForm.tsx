"use client";

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
import { Spinner } from "@/components/ui/spinner";
import { Major } from "@/lib/generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { toast } from "sonner";
import { createMajor } from "../../actions";

const MajorForm = ({ major } : { major : Major }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateFormData>({
    resolver: zodResolver(createMajorSchema),
    defaultValues: { description: "" },
  });


  return (
    <form
      className="w-xl"
      onSubmit={handleSubmit(async (data: CreateFormData) => {
        try {
          await createMajor(data);
          setLoading(true);
          toast.success("رشته با موفقیت اضافه شد", { position: "top-center" });
          router.push('/admin/majors');
        } catch (error) {
          setLoading(false);
          toast.error("خطایی رخ داده است", { position: "top-center" });
        }
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
                <SimpleMdeReact value={field.value} onChange={field.onChange} />
              )}
            />
          </Field>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
          <Field>
            <Button
              className="cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Spinner />}
              ثبت
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default MajorForm;
