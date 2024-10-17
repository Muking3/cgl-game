import { UseFormReturn } from "react-hook-form";
import FormFieldCustom from "@/components/molecules/formFieldCustom";
import FormSelect from "@/components/molecules/formSelect";
import FormTextarea from "@/components/molecules/formTextarea";
import FormImage from "@/components/molecules/formImage";
import FormPassword from "@/components/molecules/formPassword";
import FormNumber from "@/components/molecules/formNumber";
import FormDate from "@/components/molecules/formDate";
import FormSearchSelect from "@/components/molecules/formSearchSelect";

export type Field = {
    name: string;
    label?: string;
    type: "text" | "password" | "textarea" | "image" | "select" | "number" | "date" | "search-select"
    min?: string | number | undefined;
    options?: { value: string; label: string }[];
    placeholder?: string;
    fetchOptions?: (field: string, value: string) => Promise<any>
    optionLabelKey?: string
};

type RenderFieldProps = {
    field: Field;
    form: UseFormReturn<any>;
    clearMessage?: () => void;
    url?: string | null;
};

export function renderField({ field, form, clearMessage, url }: RenderFieldProps) {
    switch (field.type) {
        case "text":
            return (
                <FormFieldCustom
                    form={form}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    labelClassName="text-black"
                    onFocus={clearMessage}
                />
            );
        case "password":
            return (
                <FormPassword
                    form={form}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    labelClassName="text-black"
                    onFocus={clearMessage}
                />
            );
        case "number":
            return (
                <FormNumber
                    form={form}
                    name={field.name}
                    label={field.label}
                    min={field.min}
                    placeholder={field.placeholder}
                    labelClassName="text-black"
                    onFocus={clearMessage}
                />
            );
        case "textarea":
            return (
                <FormTextarea
                    form={form}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    labelClassName="text-black"
                    onFocus={clearMessage}
                />
            );
        case "select":
            return (
                <FormSelect
                    form={form}
                    name={field.name}
                    label={field.label}
                    options={field.options || []}
                    labelClassName="text-black"
                    onFocus={clearMessage}
                />
            );
        case "image":
            return (
                <FormImage
                    form={form}
                    name={field.name}
                    label={field.label}
                    onFocus={clearMessage}
                    url={url}
                />
            );
        case "date":
            return (
                <FormDate
                    form={form}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    labelClassName="text-black"
                    onFocus={clearMessage}
                />
            );
        case "search-select":
            return (
                <FormSearchSelect
                    form={form}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    fetchOptions={field.fetchOptions}
                    optionLabelKey={field.optionLabelKey}
                />
            );
        default:
            return null;
    }
}
