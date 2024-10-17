import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type ContentProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  onFocus?: () => void;
};

export default function FormTextarea<T extends FieldValues>({
  form,
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
          <FormLabel className={`flex justify-start paragraph ${labelClassName}`}>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              className="w-full min-h-[150px] resize-none paragraph"
              onFocus={onFocus}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
