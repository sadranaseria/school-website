"use client";

import { createMajorSchema, MajorSchema } from "@/app/(admin)/validation";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { toast } from "sonner";
import ImageDropzone from "../../_components/ImageDropzone";
import { createMajor, updateMajor } from "../actions";
import { MajorsWithImages } from "../types";

const MajorForm = ({ major }: { major?: MajorsWithImages }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<MajorSchema>({
    resolver: zodResolver(createMajorSchema),
    defaultValues: {
      images:
        major?.images.map((img) => ({ url: img.url, key: img.key })) ?? [],
    },
  });

  const onCraeteMajor = handleSubmit(async (data: MajorSchema) => {
    try {
      setLoading(true);
      if (major) await updateMajor(major.id, data);
      else await createMajor(data);
      router.push("/admin/majors");
      toast.success(
        major ? "رشته با موفقیت به روز شد" : "رشته با موفقیت اضافه شد",
        { position: "top-center" },
      );
    } catch (error) {
      setLoading(false);
      toast.error("خطایی رخ داده است", { position: "top-center" });
    }
  });

  return (
    <form className="max-w-2xl mx-auto" onSubmit={onCraeteMajor}>
      <FieldSet>
        <FieldLegend>ساخت رشته</FieldLegend>
        <FieldGroup>
          <div className="flex gap-5">
            <Field>
              <FieldLabel htmlFor="title">عنوان رشته</FieldLabel>
              <Input
                id="title"
                className="w-full"
                defaultValue={major?.title}
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="students">تعداد هنرجویان</FieldLabel>
              <Input id="students" type="number" {...register("students" , { valueAsNumber : true })} />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="description">توضیحات رشته</FieldLabel>
            <Controller
              name="description"
              control={control}
              defaultValue={major?.description}
              render={({ field }) => (
                <SimpleMdeReact
                  value={field.value}
                  onChange={field.onChange}
                  className="text-right"
                />
              )}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </Field>
          <Controller
            name="images"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <ImageDropzone value={value} onChange={onChange} />
                {error && <FieldError>{error.message}</FieldError>}
              </>
            )}
          />
          <Field>
            <Button
              className="cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Spinner />}
              {major ? "ویرایش" : "ثبت"}
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default MajorForm;
