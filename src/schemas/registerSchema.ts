import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string({ required_error: "Le nom est requis." })
    .min(3, { message: "Le nom doit contenir au moins 3 caractères." })
    .max(50, { message: "Le nom ne peut dépasser 50 caractères." }),
  email: z.string({ required_error: "L'adresse e-mail est requise." })
    .email('Adresse e-mail invalide.'),
  password: z.string({ required_error: "Le mot de passe est requis." })
    .min(8, 'Le mot de passe doit comporter au moins 8 caractères.'),
})

export type RegisterFormValues = z.infer<typeof registerSchema>
