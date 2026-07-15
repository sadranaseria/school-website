'use client';

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form" ;

interface FormData {
  title : string;
  description : string;
}

const NewMajorsPage = () => {
  const { register , handleSubmit } = useForm<FormData>();

  return (
    <form className='w-xl' onSubmit={handleSubmit((data) => console.log(data))}>
      <FieldSet>
        <FieldLegend>ساخت رشته</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="title">عنوان رشته</FieldLabel>
            <Input id="title" className='w-full' { ...register('title') } />
          </Field>
          <Field>
            <FieldLabel htmlFor="description">توضیحات رشته</FieldLabel>
            <Textarea { ...register('description') } />
          </Field>
          <Field>
            <Button className='cursor-pointer' type="submit">ثبت</Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
};

export default NewMajorsPage;
