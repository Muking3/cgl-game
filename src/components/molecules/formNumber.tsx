import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FieldValues, Path, UseFormReturn } from "react-hook-form"

type ContentProps<T extends FieldValues> = {
    form: UseFormReturn<T>
    name: Path<T>
    label?: string
    placeholder?: string
    labelClassName?: string
    type?: string
    min?: string | number | undefined
    onFocus?: () => void;
};

export default function FormNumber<T extends FieldValues>({
    form,
    min,
    name,
    label,
    placeholder,
    labelClassName,
    onFocus
}: ContentProps<T>) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="h-full">
                    <FormLabel className={`flex justify-start paragraph ${labelClassName}`}>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Input
                            type="number"
                            min={min}
                            placeholder={placeholder}
                            {...field}
                            onChange={(e) => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                            onFocus={onFocus}
                            className="outline-none flex w-full"
                        />
                    </FormControl>
                    <FormMessage className="flex justify-start" />
                </FormItem>
            )}
        />
    )
}
