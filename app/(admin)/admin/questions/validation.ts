import { z } from "zod";
export const questionSchema = z.object({
  title: z.string().min(1, { error: 'عنوان سوال الزامی است' }),
  anwser : z.string().min(1 , { error : 'پاسخ سوال الزامی است'})
});

export type QuestionSchema = z.infer<typeof questionSchema>;
