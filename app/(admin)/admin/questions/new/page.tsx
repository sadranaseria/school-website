'use client';

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionSchema ,  questionSchema} from '../validation';

const NewQuestionPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<QuestionSchema>({ resolver: zodResolver(questionSchema) });

  const onSubmit = handleSubmit(async (data) => console.log(data));
  
  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={onSubmit}>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">متن سوال</FieldLabel>
              <Input id="title" {...register('title')}/>
              {errors.title && <FieldError>{errors.title.message}</FieldError>}
            </Field>
            <Field>
              <FieldLabel htmlFor="anwser">متن جواب</FieldLabel>
              <Input id="anwser" {...register('anwser')} />
              {errors.anwser && <FieldError>{errors.anwser.message}</FieldError>}
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button className='w-full mt-4' type="submit">ساخت سوال</Button>
      </form>
    </div>
  );
};

export default NewQuestionPage;
