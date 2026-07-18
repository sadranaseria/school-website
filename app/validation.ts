import z from 'zod/v4';

export const createMajorSchema = z.object({
  title : z.string().min(1 , 'عنوان رشته الزامی است'),
  description : z.string().min(1 , 'توضیحات الزامی است')
})

export type MajorSchema = z.infer<typeof createMajorSchema>;

export const updateMajorSchema = z.object({
  title : z.string().min(1 , 'عنوان رشته الزامی است').optional(),
  description : z.string().min(1 , 'توضیحات الزامی است').optional()
})
