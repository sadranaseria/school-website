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
  description: z.string().min(1 , { error : 'توضیحات الزامی است'}),
  images : z.array(z.object({ url : z.string() , key : z.string() })).min(1 , { error : 'توضیحات الزامی است'})
})

export type NewsShema = z.infer<typeof createNewsShema>;

export const updateNewsShema = z.object({
  title: z.string().min(1, { error: 'عنوان خبر الزامی است' }).optional(),
  description: z.string({ error : 'توضیحات الزامی است'}).optional(),
  images : z.array(z.object({ url : z.string() , key : z.string() })).optional()
})

export const creactPassedSchema = z.object({
  name: z.string().min(1, { error: 'نام هنرجو الزامی است' }),
  images: z.array(z.object({ url: z.string(), key: z.string() }) , { error: 'عکس هنرجو الزامی است' }),
  univercity : z.string().min(1 , { error : 'دانشگاه الزامی است'})
})

export const updatePassedSchema = z.object({
  name: z.string().min(1, { error: 'نام هنرجو الزامی است' }).optional(),
  images: z.array(z.object({ url: z.string(), key: z.string() }) , { error: 'عکس هنرجو الزامی است' }).optional(),
  univercity : z.string().min(1 , { error : 'دانشگاه الزامی است'}).optional()
})

export type PassedSchema = z.infer<typeof creactPassedSchema>;
