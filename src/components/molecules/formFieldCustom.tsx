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
  onFocus?: () => void;
};

export default function FormFieldCustom<T extends FieldValues>({ form, name, label, placeholder, labelClassName, onFocus }: ContentProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={`flex justify-start paragraph ${labelClassName}`}>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} onFocus={onFocus} {...field} className="outline-none flex w-full paragraph" />
          </FormControl>
          <FormMessage className="flex justify-start" />
        </FormItem>
      )}
    />
  )
}

