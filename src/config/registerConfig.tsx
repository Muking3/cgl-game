import { Field } from "@/utils/renderField";

export const registerConfig: Field[] = [
    {
        name: "name",
        label: "Nom",
        type: "text"
    },
    {
        name: "email",
        label: "Email",
        type: "text",
    },
    {
        name: "password",
        label: "Mot de passe",
        type: "password",
    },
]