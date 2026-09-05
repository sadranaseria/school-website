import z from 'zod/v4';

export const createMajorSchema = z.object({
  title : z.string().min(1 , 'عنوان رشته الزامی است'),
  description : z.string({ error : 'توضیحات الزامی است'})
})

export type MajorSchema = z.infer<typeof createMajorSchema>;

export const updateMajorSchema = z.object({
  title : z.string().min(1 , 'عنوان رشته الزامی است').optional(),
  description : z.string({ error : 'توضیحات الزامی است'}).optional()
})

export const createNewsShema = z.object({
  title: z.string().min(1, { error: 'عنوان خبر الزامی است' }),
  description: z.string({ error : 'توضیحات الزامی است'}),
  images : z.array(z.object({ url : z.string() , key : z.string() }))
})

export type CreateNewsShema = z.infer<typeof createNewsShema>;
