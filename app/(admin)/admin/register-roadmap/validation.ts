import { z } from 'zod';

export const createRoadmapStepSchema = z.object({
  title : z.string().min(1 , { error : 'عنوان مرحله الزامی است'}),
  description: z.string().min(1, { error: 'توضیحات مرحله الزامی است' }),
})

export type CreateRoadmapStep = z.infer<typeof createRoadmapStepSchema>;

export const updateRoadmapStepSchema = z.object({
  title : z.string().min(1 , { error : 'عنوان مرحله الزامی است'}).optional(),
  description: z.string().min(1, { error: 'توضیحات مرحله الزامی است' }).optional(),
})

export type UpadateRoadmapStep = z.infer<typeof updateRoadmapStepSchema>;