'use client';

import { Button } from "@/components/ui/button";
import { FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Controller, useForm } from "react-hook-form";
import { creaetPassed } from "../actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { creactPassedSchema, PassedShema } from "@/app/(admin)/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageDropzone from "../../_components/ImageDropzone";
import { PassedWithImages } from "../types";

const PassedForm = ({ passed } : { passed ?: PassedWithImages }) => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PassedShema>({
    resolver: zodResolver(creactPassedSchema),
    defaultValues: {
      name: passed?.name ?? '',
      univercity: passed?.univercity ?? '',
      images : passed?.images.map(img => ({ url : img.url , key : img.key })) ?? [],
    }
  });
  
  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await creaetPassed(data);
      toast.success("قبولی جدید با موفقیت ساخته شد");
    } catch (error) {
      console.log(error);
      toast.error("قبولی جدید ساخته نشد");
    } finally {
      setLoading(false);
      router.push("/admin/passeds");
    }
  });
  
  return (
    <form onSubmit={onSubmit}>
      <FieldSet>
        <FieldLegend>ساخت قبولی جدید</FieldLegend>
        <FieldGroup>
          <FieldLabel htmlFor="name">نام هنرجو</FieldLabel>
          <Input id="name" {...register("name")} />
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </FieldGroup>
        <FieldGroup>
          <FieldLabel htmlFor="univercity">نام دانشگاه</FieldLabel>
          <Input id="univercity" {...register("univercity")} />
          {errors.univercity && (
            <FieldError>{errors.univercity.message}</FieldError>
          )}
        </FieldGroup>
      </FieldSet>
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
      <Button className="w-full mt-4" type="submit">
        {isLoading ? (
          <div className="flex items-center gap-2">
            <Spinner />
            در حال ساخت قبولی جدید
          </div>
        ) : (
          "ساخت قبولی جدید"
        )}
      </Button>
    </form>
  )
}

export default PassedForm;