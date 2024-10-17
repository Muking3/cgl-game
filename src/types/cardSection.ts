import { Field } from "@/utils/renderField";

export type CardSection = {
    title?: string;
    section?: string;
    position?:string
    fields: Field[];
};