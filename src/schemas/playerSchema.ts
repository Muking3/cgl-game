import { z } from 'zod'

export const playerSchema = z.object({
  name: z.string({ required_error: "Le nom est requis." })
    .min(3, { message: "Le nom doit contenir au moins 3 caractères." })
    .max(50, { message: "Le nom ne peut dépasser 50 caractères." }),
})

export type PlayerFormValues = z.infer<typeof playerSchema>
