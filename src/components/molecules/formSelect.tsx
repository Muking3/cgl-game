import { Option } from '@/types/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type ContentProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  options: Option[];
  onFocus?: () => void;
};

export default function FormSelect<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  labelClassName,
  options,
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
            <div tabIndex={0} onFocus={onFocus}>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full paragraph">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value} className={option.hide}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
