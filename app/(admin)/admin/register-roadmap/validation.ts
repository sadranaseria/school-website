import { z } from 'zod';

export const createRoadmapStep = z.object({
  title : z.string().min(1 , { error : 'عنوان مرحله الزامی است'}),
  description: z.string().min(1, { error: 'توضیحات مرحله الزامی است' }),
})

export type CreateRoadmapStep = z.infer<typeof createRoadmapStep>;