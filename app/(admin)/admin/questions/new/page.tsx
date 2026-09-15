"use client";

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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionSchema, questionSchema } from "../validation";
import { createQuestion } from "../actions";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import MarkdownEditor from "../../_components/MarkdownEditor";

const NewQuestionPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<QuestionSchema>({ resolver: zodResolver(questionSchema) });
  const [isLoading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      await createQuestion(data);
      toast.success('سوال با موفقیت ساخته شد');
    } catch (error) {
      console.log(error);
      toast.error('سوال ساخته نشد');
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit}>
        <FieldSet>
          <FieldLegend>ساخت سوال جدید</FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">متن سوال</FieldLabel>
              <Input id="title" {...register("title")} />
              {errors.title && <FieldError>{errors.title.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="anwser">متن جواب</FieldLabel>
              <Controller
                name="anwser"
                control={control}
                render={({ field : { value , onChange }}) => (
                  <MarkdownEditor id="anwser" value={value} onChange={onChange} />
                )}
              />
              {errors.anwser && (
                <FieldError>{errors.anwser.message}</FieldError>
              )}
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button className="w-full mt-4" type="submit">
          {isLoading ? (
            <div className="flex gap-2 items-center">
              <Spinner /> در حال ساختن سوال
            </div>
          ) : (
            "ساخت سوال"
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewQuestionPage;
