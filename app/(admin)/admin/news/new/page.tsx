"use client";

import { createNewsShema, CreateNewsShema } from "@/app/(admin)/validation";
import { Button } from "@/components/ui/button";
import {
  FieldError,
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
import ImageDropzone from "../../_components/ImageDropzone";
import { createNews } from "../actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const NewNewsPage = () => {
  const [loading , setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateNewsShema>({ resolver: zodResolver(createNewsShema) });

  const onSubmit = handleSubmit(async(data) => {
    try {
      setLoading(true);
      await createNews(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  })

  return (
    <div className="max-w-3xl w-full">
      <form onSubmit={onSubmit}>
        <FieldSet>
          <FieldLegend>ساخت خبر جدید</FieldLegend>
          <FieldGroup>
            <FieldLabel htmlFor="title">عنوان خبر</FieldLabel>
            <Input id="title" {...register("title")} />
            {errors.title && <FieldError>{errors.title.message}</FieldError>}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor="description">توضیحات</FieldLabel>
            <Controller
              name="description"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <>
                  <SimpleMdeReact
                    id="description"
                    className="text-right"
                    value={value}
                    onChange={onChange}
                  />
                  {error && <FieldError>{error.message}</FieldError>}
                </>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <Controller
          name="images"
          control={control}
          render={({ field : { value , onChange }  , fieldState : { error }}) => (
            <>
              <ImageDropzone value={value} onChange={onChange} />
              {error && <FieldError>{error.message}</FieldError>}
            </>
          )}
        />
        <Button className="w-full mt-4" type="submit">
          {loading ? (
            <div className="flex items-center gpa-4">
              <Spinner />
              در حال ساخت خبر
            </div>
          ) : 'ساخت خبر'}
        </Button>
      </form>
    </div>
  );
};

export default NewNewsPage;
