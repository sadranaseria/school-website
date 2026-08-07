"use client";


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
import { createMajor, updateMajor } from "../actions";
import { createMajorSchema, MajorSchema } from "@/app/(admin)/validation";

const MajorForm = ({ major } : { major ?: Major }) => {
  console.log(major)
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<MajorSchema>({
    resolver: zodResolver(createMajorSchema)
  });

  const onCraeteMajor = handleSubmit(async (data: MajorSchema) => {
        try {
          setLoading(true);
          if(major)
            await updateMajor(major.id , data);
          else
            await createMajor(data);
          toast.success(major ? "رشته با موفقیت به روز شد" : "رشته با موفقیت اضافه شد", { position: "top-center" });
          router.push('/admin/majors');
          router.refresh();
        } catch (error) {
          setLoading(false);
          toast.error("خطایی رخ داده است", { position: "top-center" });
        }
      })


  return (
    <form
      className="w-full md:max-w-2xl"
      onSubmit={onCraeteMajor}
    >
      <FieldSet>
        <FieldLegend>ساخت رشته</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">عنوان رشته</FieldLabel>
            <Input id="title" className="w-full" defaultValue={major?.title} {...register("title")} />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="description">توضیحات رشته</FieldLabel>
            <Controller
              name="description"
              control={control}
              defaultValue={major?.description}
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
              { major ? "ویرایش" : "ثبت" }
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default MajorForm;
