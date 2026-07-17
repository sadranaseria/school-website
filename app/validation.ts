import z from 'zod/v4';

export const createMajorSchema = z.object({
  title : z.string().min(1 , 'عنوان رشته الزامی است'),
  description : z.string().min(1 , 'توضیحات الزامی است').max(225)
})

export type CreateFormData = z.infer<typeof createMajorSchema>;