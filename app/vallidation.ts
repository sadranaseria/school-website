import z from 'zod';

export const createMajorSchema = z.object({
  title : z.string().min(1 , 'عنوان رشته الزامی است'),
  description : z.string().min(1 , 'توضیحات الزامی است').max(225)
})