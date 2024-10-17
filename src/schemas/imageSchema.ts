import { z } from "zod";

const fileSchema = z.instanceof(File, {
    message: "Vous devez télécharger un fichier valide.",
})

export const imageSchema = z.object({
    file: fileSchema
        .refine((file) => file && file.type.startsWith('image/'), {
            message: "Le fichier doit être une image au format PNG, JPG ou JPEG",
        })
        .refine((file) => file && file.size <= 5 * 1024 * 1024, {
            message: "L'image doit avoir une taille inférieure ou égale à 5 Mo",
        }),
})