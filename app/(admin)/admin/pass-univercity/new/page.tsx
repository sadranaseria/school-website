'use client';

import { FieldSet, FieldLegend, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";
import { Spinner } from "@/components/ui/spinner";
import { register } from "module";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import ImageDropzone from "../../_components/ImageDropzone";
import loading from "../../majors/loading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { creactPassedSchema, PassedShema } from "@/app/(admin)/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { creaetPassed } from "../actions";

const NewPassedUnivercity = () => {
  const [isLoading , setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PassedShema>({
    resolver: zodResolver(creactPassedSchema),
  });

  const onSubmit = handleSubmit(async(data) => {
    try {
      setLoading(true);
      await creaetPassed(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  })
  
  return (
    <div className="max-w-4xl mx-auto">
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
            <Input id="univercity" {...register('univercity')} />
            {errors.univercity && <FieldError>{errors.univercity.message}</FieldError>}
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
        <Button className="w-full mt-4" type="submit">{
          isLoading ? (
            <div className="flex items-center gap-2"><Spinner />در حال ساخت قبولی جدید</div>
          ) : 'ساخت قبولی جدید'
          }</Button>
      </form>
    </div>
  )
}

export default NewPassedUnivercity;