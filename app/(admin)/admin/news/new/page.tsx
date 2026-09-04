"use client";

import { Button } from "@/components/ui/button";
import {
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { UploadDropzone } from "@/utils/uploadthing";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";
import { Controller, useForm } from "react-hook-form";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewsShema , NewsShema } from "@/app/(admin)/validation";

const NewNewsPage = () => {
  const { register , handleSubmit , formState : { errors } , control } = useForm<NewsShema>({ resolver : zodResolver(createNewsShema) });
  
  return (
    <div className="max-w-3xl w-full">
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <FieldSet>
          <FieldLegend>ساخت خبر جدید</FieldLegend>
          <FieldGroup>
            <FieldLabel>عنوان خبر</FieldLabel>
            <Input {...register('title')} />
            {errors.title && <FieldError>{errors.title.message}</FieldError>}
          </FieldGroup>
          <FieldGroup>
            <FieldLabel>توضیحات</FieldLabel>
            <Controller
              name='description'
              control={control}
              render={({ field: { value, onChange } , fieldState : { error } }) => (
                <>
                  <SimpleMdeReact className="text-right" value={value} onChange={onChange} />
                  {error && <FieldError>{error.message}</FieldError>}
                </>
              )}
            />
          </FieldGroup>
        </FieldSet>
        <UploadDropzone
          className="hover:border-blue-500 cursor-pointer"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
          content={{
            label: 'عکسی را بکشید یا آپلود کنید',
            button: 'آپلود'
          }}
        />
        <Button className='w-full mt-4' type='submit'>ساخت خبر</Button>
      </form>
    </div>
  );
};

export default NewNewsPage;
