"use client";

import { NewsShema, createNewsShema } from "@/app/(admin)/validation";
import { Button } from "@/components/ui/button";
import {
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import ImageDropzone from "../../_components/ImageDropzone";
import { createNews, updateNews } from "../actions";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import { NewsWithImages } from "../types";

const NewsForm = ({ news } : { news ?: NewsWithImages }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<NewsShema>({
    resolver: zodResolver(createNewsShema),
    defaultValues: {
      title: news?.title ?? '',
      description: news?.description ?? '',
      images : news?.images.map(img => ({ url : img.url , key : img.key })) ?? []
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      if (news)
        await updateNews(news.id, data);
      else
          await createNews(data);
      if(news)
        toast.success("خبر با موفقیت ویرایش شد");
      else
        toast.success("خبر با موفقیت ساخته شد");
    } catch (error) {
      console.log(error);
      if(news)
        toast.error("خبر با ویرایش نشد");
      else
        toast.error("خبر با ساخته نشد");
    } finally {
      setLoading(false);
      router.push("/admin/news");
    }
  });

  return (
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
            render={({ field: { value, onChange }, fieldState: { error } }) => (
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
        render={({ field: { value, onChange }, fieldState: { error } }) => (
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
            {news ? 'در حال ویرایش' : 'در حال ساخت'}
          </div>
        ) : (
            <div>{news ? 'ویرایش خبر' : 'ساخت خبر'}</div>
        )
        }
      </Button>
    </form>
  );
};

export default NewsForm;
